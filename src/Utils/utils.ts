import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ImageTypes } from '@/enums/enums';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrls(type: ImageTypes): string[] {
  const allImageUrls: string[] = [];
  const portraitImageUrls: string[] = [];
  const backgroundImageUrls: string[] = [];

  if (type === 'ALL') {
    for (let i = 1; i <= 39; i++) {
      allImageUrls.push(new URL(`../assets/All/all-${i}.webp`, import.meta.url).href);
    }
    return allImageUrls;
  }

  if (type === 'PORTRAITS') {
    for (let i = 1; i <= 13; i++) {
      portraitImageUrls.push(new URL(`../assets/Portraits/p-${i}.webp`, import.meta.url).href);
    }
    return portraitImageUrls;
  }

  if (type === 'BACKGROUNDS') {
    for (let i = 1; i <= 2; i++) {
      backgroundImageUrls.push(new URL(`../assets/Backgrounds/bg-${i}.webp`, import.meta.url).href);
    }
    return backgroundImageUrls;
  }

  return [];
}
