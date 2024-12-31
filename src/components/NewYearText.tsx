import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const NewYearText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    gsap.fromTo(
      element.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 1,
      }
    );
  }, []);

  return (
    <div ref={textRef} className="text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
        <span className="block">Happy</span>
        <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          New Year
        </span>
        <span className="block text-7xl md:text-9xl">2025</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 opacity-0">
        May your dreams take flight and your spirit shine bright!
      </p>
      <p className="text-xl md:text-2xl text-gray-300 opacity-0">~Senyo</p>
    </div>
  );
};

export default NewYearText;
