import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility pro spojení Tailwind tříd
 * Řeší konflikty mezi třídami (např. p-4 + p-6 = p-6)
 * 
 * @example
 * cn('p-4 text-red-500', isActive && 'bg-blue-500')
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}