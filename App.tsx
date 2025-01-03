import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/sections/WhatWeDo';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Subscriptions } from './components/sections/Subscriptions';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { AnimatedBackground } from './components/background/AnimatedBackground';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <Preloader onComplete={() => setShowContent(true)} />
      
      {showContent && (
        <>
          <AnimatedBackground />
          <CustomCursor />
          <Navigation />
          <Hero />
          <WhatWeDo />
          <Services />
          <Process />
          <Subscriptions />
          <FAQ />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;