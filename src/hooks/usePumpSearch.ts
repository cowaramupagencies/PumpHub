"use client";

import { useEffect, useState } from "react";
import { searchCatalog } from "@/services/searchService";
import type { SearchFilter, SearchResult } from "@/types";

export function usePumpSearch(query: string, filter: SearchFilter = "all") {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(async () => {
      const found = await searchCatalog(query, filter);
      setResults(found);
      setLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [query, filter]);

  return { results, loading, pumps: results.filter((r) => r.type === "pump"), parts: results.filter((r) => r.type === "part") };
}
