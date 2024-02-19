import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrls(): string[] {
  const imageUrls: string[] = [];

  for (let i = 1; i <= 39; i++) {
    imageUrls.push(new URL(`../assets/All/all-${i}.webp`, import.meta.url).href);
  }

  return imageUrls;
}
