import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 80 },
        { name: "C", level: 85 },
        { name: "SQL", level: 75 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React JS", level: 70 },
        { name: "Pandas/NumPy", level: 85 },
        { name: "TensorFlow/Keras", level: 65 },
        { name: "Scikit-Learn", level: 75 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "Jupyter Notebook", level: 90 },
        { name: "VS Code / IDEs", level: 95 },
        { name: "Database Design", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-24 flex flex-col justify-center relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mr-2">02.</span> 
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 animate-fade-up group"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-8 pb-3 border-b border-white/5">
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-200 font-medium tracking-wide">{skill.name}</span>
                      <span className="text-slate-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800/50 rounded-full overflow-hidden shadow-inner border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full relative overflow-hidden group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
