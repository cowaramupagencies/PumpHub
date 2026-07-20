const CACHE_NAME = "pumphub-v2";
const APP_SHELL = [
  "/",
  "/davey",
  "/davey/search",
  "/davey/saved",
  "/davey/settings",
  "/manifest.json",
  "/icons/icon.svg",
];

function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

/** Next.js build output must never be cached — hashes change on every deploy/dev rebuild. */
function shouldBypassServiceWorker(url) {
  return url.pathname.startsWith("/_next/");
}

function isHtmlNavigation(request) {
  return (
    request.mode === "navigate" ||
    request.headers.get("accept")?.includes("text/html") === true
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (!isSameOrigin(url) || shouldBypassServiceWorker(url)) return;

  if (isHtmlNavigation(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request)),
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    }),
  );
});
