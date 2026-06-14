import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Code, Monitor, Camera } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-6">About Me</h2>
            <div className="h-1.5 w-20 bg-sky-500 rounded-full mb-8"></div>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {personalInfo.about1}
            </p>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {personalInfo.about2}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                <h4 className="text-sky-500 font-bold text-3xl mb-1">{personalInfo.experienceYears}</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Experience</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                <h4 className="text-emerald-500 font-bold text-3xl mb-1">{personalInfo.projectsCompleted}</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { title: 'ERP Implementation', desc: 'System analysis and production automation expert.', icon: <Code className="w-6 h-6" />, color: 'sky' },
              { title: 'Visual Design', desc: 'Modern design using Adobe Creative Suite.', icon: <Monitor className="w-6 h-6" />, color: 'emerald' },
              { title: 'Content Creation', desc: 'Creative storytelling through travel vlogs and video.', icon: <Camera className="w-6 h-6" />, color: 'rose' },
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-3xl border border-white/5 hover:bg-slate-800/60 transition-colors group">
                <div className="flex items-center gap-6">
                  <div className={`p-4 rounded-xl bg-${item.color}-500/10 text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
