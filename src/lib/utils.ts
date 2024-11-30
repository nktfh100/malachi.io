import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createEnterAnimProps(delay: number, y: number = 20) {
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0, transition: { delay, duration: 0.3 } },
  };
}

export function createEnterAnimVariants(delay: number, y: number = 20) {
  return {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.3 } },
  };
}
