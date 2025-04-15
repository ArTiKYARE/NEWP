// src/global.d.ts
interface Window {
    dataLayer: unknown[];
    ym?: (id: number, action: string, options: object) => void;
  }