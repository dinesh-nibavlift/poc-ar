import { useEffect } from 'react';

export const useHideFooter = () => {
  const getFooterElement = () => {
    if (window) {
      return document.getElementById('footer-container');
    }
    return null;
  };

  useEffect(() => {
    const footer = getFooterElement();

    if (footer) {
      footer.style.display = 'none';
    }

    return () => {
      if (footer) {
        footer.style.display = 'block';
      }
    };
  }, []);
};
