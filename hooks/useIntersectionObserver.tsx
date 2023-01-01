import { MutableRefObject, useEffect, useRef } from 'react';

export function useIntersectionObserver(callback : any) {
  const observer : MutableRefObject<any> = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      callback(entries);
    });

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return [ref, observer.current];
}