import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const useResizeHandler = (interval = 250) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }

    const resizeListener = () => {
      if (isMounted) {
        setWindowWidth(getWidth());
      }
    };
    if (isMounted) {
      resizeListener();
      window.addEventListener('resize', debounce(resizeListener, interval));
    }
    return () => {
      setIsMounted(false);
      window.removeEventListener('resize', resizeListener);
    };
  }, [isMounted]);

  return windowWidth;
};

export { useResizeHandler };
