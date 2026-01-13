declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const pageView = (url: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-6K2V4GQF6P', {
      page_path: url,
    });
  }
};