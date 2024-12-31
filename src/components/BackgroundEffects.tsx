import React from 'react';
import Firework from './Firework';
import Splash from './Splash';

const BackgroundEffects = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none">
        <Firework delay={0} x="10%" />
        <Firework delay={0.5} x="30%" scale={1.2} />
        <Firework delay={1} x="50%" scale={1.5} />
        <Firework delay={1.5} x="70%" scale={1.2} />
        <Firework delay={2} x="90%" />
        
        <Splash x="20%" y="30%" delay={0} />
        <Splash x="80%" y="60%" delay={1.5} />
        <Splash x="40%" y="70%" delay={2.5} />
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
    </>
  );
};

export default BackgroundEffects;