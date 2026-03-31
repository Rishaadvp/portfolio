import React from 'react';
import { Terminal, Lightbulb, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-24 flex items-center relative z-10 pt-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mr-2">01.</span> 
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-cyan-500/10 transition-shadow duration-500 animate-fade-up">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Hello! I'm <strong className="text-cyan-400 font-semibold">Muhammed Rishad VP</strong>, an ambitious tech enthusiast and problem solver 
              currently in my second year pursuing a B.Tech in AI and Data Science at KMCT IETM, Kerala.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              My journey in software development is driven by a deep curiosity for how things work under the hood. 
              I specialize in bridging the gap between raw data and actionable intelligence, blending my core 
              programming skills in Python and C++ with modern development practices to create impactful software.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Whether I'm developing facial recognition models or exploring new frameworks, my goal remains constant: 
              <strong className="text-cyan-400 font-semibold"> to build intelligent, efficient, and user-centric solutions.</strong>
            </p>
          </div>

          <div className="flex flex-col gap-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Card 1 */}
            <div className="group bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3">
              <Terminal className="text-purple-400 group-hover:text-cyan-400 transition-colors" size={32} />
              <h3 className="text-xl font-bold text-slate-100 tracking-wide">Software Dev</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                Passionate about clean code, algorithm design, and building robust backend systems.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="group bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-purple-500/30 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3">
              <Lightbulb className="text-cyan-400 group-hover:text-purple-400 transition-colors" size={32} />
              <h3 className="text-xl font-bold text-slate-100 tracking-wide">Problem Solving</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                Translating complex, real-world problems into logical, efficient programmatic solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3">
              <Code2 className="text-purple-400 group-hover:text-cyan-400 transition-colors" size={32} />
              <h3 className="text-xl font-bold text-slate-100 tracking-wide">Continuous Learning</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                Always expanding my skill set to stay ahead of the curve in AI, DS, and Web technologies.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
