import { useRef, useState, useEffect, RefObject } from "react";

function useInView(): [RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export default useInView;