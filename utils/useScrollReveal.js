import { useEffect } from 'react';

export default function useScrollReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    });

    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref]);
}