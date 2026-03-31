import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import avatarImg from '../assets/avatar.png'; // Generated avatar

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 flex flex-col justify-center items-center relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8 items-center">
          
          <div className="lg:col-span-3 order-2 lg:order-1 text-center lg:text-left space-y-6 animate-fade-up">
            <p className="text-cyan-400 font-medium tracking-wide text-lg md:text-xl">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500 tracking-tight leading-tight pb-2">
              Muhammed Rishad VP.
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-400 leading-tight">
              I build things for the future.
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              I'm an AI & Data Science Student passionate about solving complex problems 
              through elegant software development. Specializing in Python, C++, and building 
              cutting-edge models.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
              <a 
                href="#projects" 
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/50 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] hover:-translate-y-1"
              >
                View Projects 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900/30 hover:bg-white/10 text-slate-200 border border-slate-700 hover:border-slate-400 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-40 group-hover:opacity-75 blur-3xl transition-opacity duration-700 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl bg-slate-900/40">
                <img 
                  src={avatarImg} 
                  alt="Abstract AI Avatar" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
