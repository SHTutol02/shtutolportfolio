import React from 'react';
import { motion } from 'motion/react';
import { skills, languages, specialSkills } from '../data';
import { Database, Network, Cpu, Palette, CheckCircle2, Globe, Star } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="w-8 h-8" />,
  Network: <Network className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white mb-4"
          >
            Core Competencies & Skills
          </motion.h2>
          <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Over 6 years of hands-on experience in IT infrastructure, ERP solutions, and digital design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 hover:border-slate-700 transition-all group"
            >
              <div className="text-sky-400 mb-6 group-hover:scale-110 group-hover:text-sky-300 transition-transform origin-left">
                {iconMap[skillGroup.icon]}
              </div>
              <h3 className="text-xl font-bold mb-6 text-white">{skillGroup.category}</h3>
              <ul className="space-y-4">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500/70 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              <span className="bg-blue-600 text-white px-2 py-1 inline-block">Software Proficiency</span>
            </h3>
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between text-white font-medium mb-3">
                  <span>MS Excel (VBA/Automation)</span>
                  <span>95%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-400 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-white font-medium mb-3">
                  <span>Windows Server Management</span>
                  <span>90%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-white font-medium mb-3">
                  <span>Graphic Design Suite</span>
                  <span>85%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-400 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111322] border border-slate-800 rounded-[2rem] p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
            <p className="text-slate-400 text-lg leading-relaxed italic mb-8">
              "During my tenure at SIM GROUP, I successfully implemented multiple ERP modules and increased operational workflow by optimizing the IT infrastructure."
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-sky-500/10 text-sky-400 px-4 py-1.5 rounded-full text-sm font-medium">6+ Years Exp</span>
              <span className="bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium">ERP Expert</span>
              <span className="bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium">Technical Lead</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-sky-400" />
              <h3 className="text-2xl font-bold text-white">Language Proficiency</h3>
            </div>
            
            <div className="space-y-6">
              {languages.map((lang, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between text-white mb-2">
                    <span className="font-bold">{lang.name}</span>
                    <span className="text-sm text-slate-400">{lang.level}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        lang.color === 'sky' ? 'bg-sky-400' :
                        lang.color === 'emerald' ? 'bg-emerald-400' : 'bg-purple-400'
                      }`} 
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Special Skills</h3>
            </div>
            <ul className="space-y-4">
              {specialSkills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-xl border border-white/5 hover:border-slate-700 transition-colors">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span className="text-slate-300 font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
