import { useEffect, useRef, useState, useCallback } from 'react';

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ─── Navbar Scroll Hook ───────────────────────────────────────────────────────
export function useNavbarScroll(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
}

// ─── Typewriter Hook ──────────────────────────────────────────────────────────
export function useTypewriter(phrases: string[], delay = 1000) {
  const [text, setText] = useState('');
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const typing = useRef(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const phrase = '// ' + phrases[phraseIdx.current];
      if (typing.current) {
        setText(phrase.substring(0, charIdx.current + 1));
        charIdx.current++;
        if (charIdx.current >= phrase.length) {
          typing.current = false;
          timer = setTimeout(tick, 1800);
          return;
        }
      } else {
        setText(phrase.substring(0, charIdx.current - 1));
        charIdx.current--;
        if (charIdx.current <= 0) {
          typing.current = true;
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
          charIdx.current = 0;
          timer = setTimeout(tick, 300);
          return;
        }
      }
      timer = setTimeout(tick, typing.current ? 70 : 40);
    }

    timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [phrases, delay]);

  return text;
}

// ─── Animated Counter Hook ────────────────────────────────────────────────────
export function useAnimatedCounter(target: number, trigger: boolean, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = target / (duration / 35);
    const timer = setInterval(() => {
      start = Math.min(start + increment, target);
      setCount(Math.floor(start));
      if (start >= target) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, [target, trigger, duration]);

  return count;
}

// ─── Click Outside Hook ───────────────────────────────────────────────────────
export function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>(null);

  const handler = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) callback();
  }, [callback]);

  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [handler]);

  return ref;
}
