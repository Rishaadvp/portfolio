import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-24 flex items-center relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mr-2">05.</span> 
          Get In Touch
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start animate-fade-up">
          
          {/* Contact Details */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-100 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Let's build something amazing together
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Whether you have a question, a project opportunity, or just want to connect, 
                my inbox is always open. I'll thoughtfully respond to every message.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <span className="text-slate-300 text-lg group-hover:text-cyan-400 transition-colors">Kolathara, Calicut, Kerala, 673655, India</span>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                  <Phone className="text-purple-400" size={24} />
                </div>
                <a href="tel:+917012667975" className="text-slate-300 text-lg group-hover:text-purple-400 transition-colors">+91 7012667975</a>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <a href="mailto:rishaadvp@gmail.com" className="text-slate-300 text-lg group-hover:text-cyan-400 transition-colors">rishaadvp@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-white/5">
              <a href="https://github.com/Rishaadvp" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-300 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all shadow-lg hover:shadow-cyan-500/20">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/muhammed-rishad-vp" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-300 border border-white/10 hover:border-purple-400 hover:text-purple-400 hover:-translate-y-1 transition-all shadow-lg hover:shadow-purple-500/20">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com/rishaadvp" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-300 border border-white/10 hover:border-pink-400 hover:text-pink-400 hover:-translate-y-1 transition-all shadow-lg hover:shadow-pink-500/20">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-shadow duration-500">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-slate-300 font-medium ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-light" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-300 font-medium ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all font-light" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-300 font-medium ml-1">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Your Message" 
                  required 
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-light resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full mt-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-lg shadow-[0_4px_14px_0_rgba(34,211,238,0.39)] hover:shadow-[0_6px_20px_rgba(34,211,238,0.23)] hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
