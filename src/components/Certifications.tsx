import React from 'react';
import { motion } from 'motion/react';
import { certifications } from '../data';
import { Award, Monitor, FileText } from 'lucide-react';

export default function Certifications() {
  const icons = [Award, Monitor, FileText];

  const getColorStyles = (color: string) => {
    switch (color) {
      case 'purple':
        return {
          cardBorder: 'border-purple-500/30',
          borderLeft: 'border-l-purple-500',
          badgeBg: 'bg-purple-900/40',
          textColor: 'text-purple-400'
        };
      case 'blue':
        return {
          cardBorder: 'border-blue-500/30',
          borderLeft: 'border-l-blue-500',
          badgeBg: 'bg-blue-900/40',
          textColor: 'text-blue-400'
        };
      case 'emerald':
      default:
        return {
          cardBorder: 'border-emerald-500/30',
          borderLeft: 'border-l-emerald-500',
          badgeBg: 'bg-emerald-900/40',
          textColor: 'text-emerald-400'
        };
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 bg-[#020617] border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white mb-4"
          >
            Certifications & Training
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-6">
          {certifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`w-full bg-[#0B111F] rounded-[2.5rem] border ${getColorStyles(certifications[0].color).cardBorder} border-l-[8px] ${getColorStyles(certifications[0].color).borderLeft} p-6 md:p-10`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex-1">
                  <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase mb-4 ${getColorStyles(certifications[0].color).badgeBg} ${getColorStyles(certifications[0].color).textColor}`}>
                    <Award className="w-4 h-4" />
                    CERTIFICATION
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight">
                    {certifications[0].title}
                  </h3>
                  <p className="text-slate-300 text-lg md:text-xl font-medium mb-1">
                    {certifications[0].institute}
                  </p>
                  <p className="italic text-slate-500 text-sm md:text-base">
                    Core Focus: {certifications[0].skills}
                  </p>
                </div>
                
                <div className="w-full md:w-auto bg-[#171D2D] p-6 md:p-8 rounded-3xl min-w-[240px] text-left md:text-right shrink-0 shadow-lg">
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1.5">DURATION</div>
                  <div className={`text-3xl md:text-4xl font-black ${getColorStyles(certifications[0].color).textColor}`}>{certifications[0].duration}</div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.slice(1).map((cert, index) => {
              const styles = getColorStyles(cert.color);
              const RealIndex = index + 1;
              const Icon = icons[RealIndex % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-[#0B111F] rounded-[2.5rem] border ${styles.cardBorder} border-l-[8px] ${styles.borderLeft} p-6 md:p-10 flex flex-col h-full items-start`}
                >
                  <div className="mb-6">
                    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase ${styles.badgeBg} ${styles.textColor}`}>
                      <Icon className="w-4 h-4" />
                      TRAINING
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-slate-300 text-lg font-medium mb-1">
                    {cert.institute}
                  </p>
                  <p className="italic text-slate-500 text-sm mb-10 flex-grow">
                    Core Focus: {cert.skills}
                  </p>

                  <div className="h-px bg-white/5 w-full mb-6 mt-auto"></div>

                  <div className="flex justify-between items-end w-full">
                    <div>
                      <div className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1.5">DURATION</div>
                      <div className={`text-2xl md:text-3xl font-extrabold ${styles.textColor}`}>{cert.duration}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
