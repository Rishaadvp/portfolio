import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SoftAurora from './components/SoftAurora';

function App() {
  return (
    <div className="app-container relative min-h-screen text-slate-100 font-sans selection:bg-cyan-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-auto">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="relative z-10 text-center py-8 border-t border-white/10 mt-16 backdrop-blur-md bg-slate-900/30">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Muhammed Rishad VP. Designed & Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
