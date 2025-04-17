import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const ToastStyles = {
  success: {
    style: {
      backgroundColor: "#059669",
      text: "white"
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




export const fetcher = async (url: string) => {
  const response = await fetch(url, { credentials: "include" });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return await response.json();
};


export class RouteError extends Error {
  statusCode: number
  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "RouteError";
    this.statusCode = statusCode;
  }
}