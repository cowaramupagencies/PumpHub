import { execSync } from "child_process";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

for (const size of [192, 512]) {
  const out = join(root, `public/icons/icon-${size}.png`);
  try {
    execSync(
      `python3 -c "
from PIL import Image, ImageDraw
size = ${size}
img = Image.new('RGBA', (size, size), (245, 197, 24, 255))
draw = ImageDraw.Draw(img)
cx, cy = size//2, size//2
r = size // 5
draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline=(26, 39, 68, 255), width=max(2, size//32))
draw.ellipse([cx-r//3, cy-r//3, cx+r//3, cy+r//3], fill=(59, 130, 246, 255))
img.save('${out}')
"`,
      { stdio: "inherit" },
    );
    console.log(`Created icon-${size}.png`);
  } catch {
    console.warn(`Skipped icon-${size}.png (install Pillow: pip3 install Pillow)`);
  }
}
