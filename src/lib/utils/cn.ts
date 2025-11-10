import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility pro merging Tailwind classes
 * Použití: cn('text-red-500', 'text-blue-500') => 'text-blue-500'
 * 
 * @example
 * cn('p-4', 'bg-white', isActive && 'text-bold') => 'p-4 bg-white text-bold' (pokud je isActive pravda)
 * cn ('flex', 'items-center', condition ? 'bg-green-500' : 'bg-red-500') => 'flex items-center bg-green-500' (pokud je condition pravda)
 * cn('px-2 py-1', 'px-4') // => 'px-4 py-1',
 */

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs));
}