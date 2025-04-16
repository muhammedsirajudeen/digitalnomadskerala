import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const ToastStyles = {
  success: {
    style: {
      backgroundColor: "lightgreen",
      text: "black"
    }
  },
  error: {
    style: {
      backgroundColor: "red",
      text: "white"
    }
  },
  info: {
    style: {
      backgroundColor: "blue",
      text: "white"
    }
  },
  warn: {
    style: {
      backgroundColor: "orange",
      text: "white"
    }
  }
} as const