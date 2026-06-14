import React from 'react';
import { motion } from 'motion/react';
import { education } from '../data';

export default function Education() {
  const getColorStyles = (color: string) => {
    switch (color) {
      case 'sky':
        return {
          cardBorder: 'border-sky-500/30',
          borderLeft: 'border-l-sky-500',
          badgeBg: 'bg-sky-900/40',
          textColor: 'text-sky-400'
        };
      case 'emerald':
        return {
          cardBorder: 'border-emerald-500/30',
          borderLeft: 'border-l-emerald-500',
          badgeBg: 'bg-emerald-900/40',
          textColor: 'text-emerald-400'
        };
      case 'orange':
      default:
        return {
          cardBorder: 'border-orange-500/30',
          borderLeft: 'border-l-orange-500',
          badgeBg: 'bg-orange-900/40',
          textColor: 'text-orange-400'
        };
    }
  };

  return (
    <section id="education" className="py-24 px-6 bg-[#020617] border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Educational Qualification
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-6">
          {education.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`w-full bg-[#0B111F] rounded-[2.5rem] border ${getColorStyles(education[0].color).cardBorder} border-l-[8px] ${getColorStyles(education[0].color).borderLeft} p-6 md:p-10`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex-1">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase mb-4 ${getColorStyles(education[0].color).badgeBg} ${getColorStyles(education[0].color).textColor}`}>
                    {education[0].type}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight">
                    {education[0].degree}
                  </h3>
                  <p className="text-slate-300 text-lg md:text-xl font-medium mb-1">
                    {education[0].institute}
                  </p>
                  <p className="italic text-slate-500 text-sm md:text-base">
                    Board: {education[0].board}
                  </p>
                </div>
                
                <div className="w-full md:w-auto bg-[#171D2D] p-6 md:p-8 rounded-3xl min-w-[240px] text-left md:text-right shrink-0 shadow-lg">
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1.5">Passing Year</div>
                  <div className="text-4xl md:text-5xl font-black text-white">{education[0].year}</div>
                  
                  <div className="h-px bg-white/5 my-6 w-full"></div>
                  
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1.5">Result Obtained</div>
                  <div className={`text-2xl md:text-3xl font-extrabold ${getColorStyles(education[0].color).textColor}`}>
                    {education[0].result}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.slice(1).map((edu, index) => {
              const styles = getColorStyles(edu.color);
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
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase ${styles.badgeBg} ${styles.textColor}`}>
                      {edu.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-300 text-lg font-medium mb-1">
                    {edu.institute}
                  </p>
                  <p className="italic text-slate-500 text-sm mb-10 flex-grow">
                    Board: {edu.board}
                  </p>

                  <div className="h-px bg-white/5 w-full mb-6 mt-auto"></div>

                  <div className="flex justify-between items-end w-full">
                    <div>
                      <div className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1.5">Passing Year</div>
                      <div className="text-2xl md:text-3xl font-black text-white">{edu.year}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1.5">Result</div>
                      <div className={`text-2xl md:text-3xl font-extrabold ${styles.textColor}`}>{edu.result}</div>
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
