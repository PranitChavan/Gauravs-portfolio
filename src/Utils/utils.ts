import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ImageTypes } from '@/enums/enums';
import { imageConfig } from '@/config/imageConfig';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const allImages = import.meta.glob('../assets/All/*.webp', { eager: true, as: 'url' });
const portraitImages = import.meta.glob('../assets/Portraits/*.webp', { eager: true, as: 'url' });
const backgroundImages = import.meta.glob('../assets/Backgrounds/*.webp', { eager: true, as: 'url' });


const createImageLookupMap = (imageMap: Record<string, string>): Map<string, string> => {
  const lookup = new Map<string, string>();
  Object.entries(imageMap).forEach(([path, url]) => {
    const filename = path.split('/').pop() || '';
    lookup.set(filename, url);
  });
  return lookup;
};

const allImagesLookup = createImageLookupMap(allImages);
const portraitImagesLookup = createImageLookupMap(portraitImages);
const backgroundImagesLookup = createImageLookupMap(backgroundImages);


export function getImageUrls(type: ImageTypes): string[] {
  let imageFilenames: readonly string[] = [];
  let imageLookup: Map<string, string>;

  switch (type) {
    case 'ALL':
      imageFilenames = imageConfig.ALL;
      imageLookup = allImagesLookup;
      break;
    case 'PORTRAITS':
      imageFilenames = imageConfig.PORTRAITS;
      imageLookup = portraitImagesLookup;
      break;
    case 'BACKGROUNDS':
      imageFilenames = imageConfig.BACKGROUNDS;
      imageLookup = backgroundImagesLookup;
      break;
    default:
      return [];
  }

  return imageFilenames
    .map((filename) => imageLookup.get(filename))
    .filter((url): url is string => url !== undefined);
}
