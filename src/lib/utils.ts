import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructImageUrl(
  imageId: string,
  size: "cover_big" | "1080p",
) {
  return `https://images.igdb.com/igdb/image/upload/t_${size}/${imageId}.jpg`;
}
