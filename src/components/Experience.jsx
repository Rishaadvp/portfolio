import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-24 flex flex-col justify-center relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mr-2">04.</span> 
          Education & Experience
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-[2.15rem] top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-transparent rounded-full z-0"></div>

          <div className="flex flex-col gap-10">
            
            {/* Timeline Item 1 */}
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 animate-fade-up">
              <div className="flex-shrink-0 flex items-center justify-start md:justify-center mb-0 md:mb-0 relative">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 border-2 border-cyan-400 rounded-full flex justify-center items-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] z-10">
                  <GraduationCap size={28} className="md:w-8 md:h-8 w-6 h-6" />
                </div>
              </div>
              
              <div className="flex-grow bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-colors p-6 md:p-8 rounded-2xl shadow-xl ml-14 md:ml-0 mt-[-3.5rem] md:mt-0">
                <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">B.Tech in Artificial Intelligence & Data Science</h3>
                <h4 className="text-lg font-medium text-purple-400 mb-4">KMCT Institute of Engineering and Technology (IETM)</h4>
                
                <span className="inline-block px-4 py-1.5 bg-purple-500/10 text-purple-300 text-sm font-semibold rounded-full border border-purple-500/20 mb-4">
                  2024 - Present (2nd Year)
                </span>
                
                <p className="text-slate-400 leading-relaxed font-light">
                  Focused on core computer science subjects, machine learning, and data analytics.
                  Actively building projects related to AI models and intelligent software systems.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 flex items-center justify-start md:justify-center mb-0 md:mb-0 relative">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 border-2 border-purple-400 rounded-full flex justify-center items-center text-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.3)] z-10">
                  <Award size={28} className="md:w-8 md:h-8 w-6 h-6" />
                </div>
              </div>
              
              <div className="flex-grow bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-purple-500/30 transition-colors p-6 md:p-8 rounded-2xl shadow-xl ml-14 md:ml-0 mt-[-3.5rem] md:mt-0">
                <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">Facial Recognition Model Creator</h3>
                <h4 className="text-lg font-medium text-cyan-400 mb-4">Academic Project</h4>
                
                <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-300 text-sm font-semibold rounded-full border border-cyan-500/20 mb-4">
                  2025
                </span>
                
                <p className="text-slate-400 leading-relaxed font-light">
                  Developed an end-to-end facial recognition system using deep learning techniques to accurately
                  detect and verify individuals in real-time video streams.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
