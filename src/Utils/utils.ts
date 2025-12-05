import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ImageTypes } from '@/enums/enums';
import { imageConfig } from '@/config/imageConfig';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Pre-load all images using Vite's import.meta.glob for proper production builds
const allImages = import.meta.glob('../assets/All/*.webp', { eager: true, as: 'url' });
const portraitImages = import.meta.glob('../assets/Portraits/*.webp', { eager: true, as: 'url' });
const backgroundImages = import.meta.glob('../assets/Backgrounds/*.webp', { eager: true, as: 'url' });

/**
 * Get image URLs based on the image type
 * Uses the imageConfig to determine which images to load and in what order
 */
export function getImageUrls(type: ImageTypes): string[] {
  let imageFilenames: readonly string[] = [];
  let imageMap: Record<string, string>;

  switch (type) {
    case 'ALL':
      imageFilenames = imageConfig.ALL;
      imageMap = allImages;
      break;
    case 'PORTRAITS':
      imageFilenames = imageConfig.PORTRAITS;
      imageMap = portraitImages;
      break;
    case 'BACKGROUNDS':
      imageFilenames = imageConfig.BACKGROUNDS;
      imageMap = backgroundImages;
      break;
    default:
      return [];
  }

  return imageFilenames
    .map((filename) => {
      // Find the matching image in the glob results
      // The glob key will be like '/src/assets/All/all-1.webp'
      const imagePath = Object.keys(imageMap).find((key) => key.endsWith(filename));
      return imagePath ? imageMap[imagePath] : null;
    })
    .filter((url): url is string => url !== null);
}
