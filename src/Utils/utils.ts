import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ImageTypes } from '@/enums/enums';
import { imageConfig } from '@/config/imageConfig';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get image URLs based on the image type
 * Uses the imageConfig to determine which images to load and in what order
 */
export function getImageUrls(type: ImageTypes): string[] {
  let imageFilenames: readonly string[] = [];
  let assetPath: string;

  switch (type) {
    case 'ALL':
      imageFilenames = imageConfig.ALL;
      assetPath = '../assets/All';
      break;
    case 'PORTRAITS':
      imageFilenames = imageConfig.PORTRAITS;
      assetPath = '../assets/Portraits';
      break;
    case 'BACKGROUNDS':
      imageFilenames = imageConfig.BACKGROUNDS;
      assetPath = '../assets/Backgrounds';
      break;
    default:
      return [];
  }

  return imageFilenames.map((filename) => 
    new URL(`${assetPath}/${filename}`, import.meta.url).href
  );
}
