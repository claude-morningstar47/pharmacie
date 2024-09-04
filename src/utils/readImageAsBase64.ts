// utils/readImageAsBase64.ts
import logoUrl from '../assets/skinmed-pastille-2.png';

export const readImageAsBase64 = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      const base64 = canvas.toDataURL('image/png');
      resolve(base64);
    };

    img.onerror = reject;
    img.src = logoUrl;
  });
};