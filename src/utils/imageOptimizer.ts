// Image optimization helper providing WebP URLs with JPG fallback

const webpGlob = import.meta.glob<string>('../assets/images/projects/*.webp', {
  eager: true,
  import: 'default',
});

// Build a fast lookup map: extracted stem -> webp URL
const stemToWebp = new Map<string, string>();

for (const [path, webpUrl] of Object.entries(webpGlob)) {
  // path is e.g. "../assets/images/projects/dsc01220.jpg-1280x960.webp"
  const filename = path.split('/').pop() || '';
  const stem = filename.replace(/\.webp$/, '');
  stemToWebp.set(stem, webpUrl);
}

/**
 * Given any image URL (dev or production Vite asset URL),
 * returns the matching WebP URL if available.
 */
export function getWebpUrl(src: string): string | undefined {
  if (!src) return undefined;
  if (src.endsWith('.webp')) return src;

  // Extract base filename without hash or extension
  // In dev: /src/assets/images/projects/dsc01220.jpg-1280x960.jpg
  // In prod: /assets/dsc01220.jpg-1280x960-BFU6i0Pf.jpg
  const filename = src.split('/').pop()?.split('?')[0] || '';
  
  // Try direct match by removing .jpg / .jpeg / .png
  const cleanBase = filename.replace(/\.[a-zA-Z0-9]+$/, '');
  
  // In production, Vite appends "-[hash]" before the extension: e.g. "image-1256x888-ClK4JpQB"
  // Remove trailing hash if present (-[A-Za-z0-9_-]{8,})
  const stemWithoutHash = cleanBase.replace(/-[A-Za-z0-9_-]{8}$/, '');

  // Look up in our map
  if (stemToWebp.has(stemWithoutHash)) {
    return stemToWebp.get(stemWithoutHash);
  }
  
  // Also try exact filename without extension
  if (stemToWebp.has(cleanBase)) {
    return stemToWebp.get(cleanBase);
  }

  // Fallback search through keys
  for (const [stem, webpUrl] of stemToWebp.entries()) {
    if (filename.startsWith(stem)) {
      return webpUrl;
    }
  }

  return undefined;
}
