import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Firework: React.FC<{ delay: number; x: string; scale?: number }> = ({ delay, x, scale = 1 }) => {
  const fireworkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = fireworkRef.current;
    if (!element) return;

    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(element, 
      { y: '100vh', opacity: 1 },
      { y: '0vh', duration: 1.5, ease: 'power2.out', delay }
    )
    .to(element, {
      scale: scale,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
    .to(element, {
      scale: 0.1,
      opacity: 0,
      duration: 0,
    });
  }, [delay, scale]);

  return (
    <div ref={fireworkRef} className="absolute bottom-0" style={{ left: x }}>
      <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50" />
    </div>
  );
}

export default Firework;