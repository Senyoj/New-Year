import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SplashProps {
  x: string;
  y: string;
  delay: number;
}

const Splash: React.FC<SplashProps> = ({ x, y, delay }) => {
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = splashRef.current;
    if (!element) return;

    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(element,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 0.15,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        delay
      }
    )
    .to(element, {
      scale: 1.5,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  }, [delay]);

  return (
    <div 
      ref={splashRef}
      className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400/20 to-white/20 blur-xl"
      style={{ left: x, top: y }}
    />
  );
};

export default Splash;