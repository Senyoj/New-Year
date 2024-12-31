import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import NewYearText from './components/NewYearText';
import BackgroundEffects from './components/BackgroundEffects';
import ContactSection from './components/ContactSection';

function App() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    gsap.to(bg, {
      backgroundPosition: '100% 100%',
      duration: 20,
      repeat: -1,
      ease: 'none'
    });
  }, []);

  return (
    <div 
      ref={bgRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black"
      style={{ backgroundSize: '400% 400%' }}
    >
      <BackgroundEffects />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <NewYearText />
        
        <div className="mt-12 flex gap-4 items-center animate-bounce">
          <Sparkles className="w-6 h-6 text-yellow-400" />
          <span className="text-gray-400 text-lg">Transforming Ideas into Reality</span>
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </div>
      </div>

      <ContactSection />
    </div>
  );
}

export default App;