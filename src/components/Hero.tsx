import React from 'react';
import { motion } from 'motion/react';
import Typewriter from 'typewriter-effect';
import { personalInfo } from '../data';
import { Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12 relative overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 blur-[100px] rounded-full point-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full point-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-3/5"
        >
          <span className="text-sky-400 font-mono text-sm tracking-widest uppercase mb-4 block">
            {personalInfo.role}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white leading-tight">
            Sajjad Hosain Tutol
          </h1>
          
          <div className="text-xl md:text-3xl font-bold text-sky-400 mb-6">
            <Typewriter
              options={{
                strings: [
                  'Senior IT Executive',
                  'ERP Solution Specialist',
                  'Hardware Engineer',
                  'Professional Graphic Designer'
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </div>

          <p className="max-w-xl text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
            I am currently working as a Senior Executive at SIM GROUP. I specialize in enterprise solutions, IT infrastructure management, and modern graphic design.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-sky-500/25 flex items-center gap-2">
              View Projects <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2">
              <Mail className="w-5 h-5" /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/5 flex justify-center md:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            {/* Load user uploaded profile image or fallback */}
            <div className="relative aspect-[3/4] w-72 md:w-80 rounded-[2rem] overflow-hidden border-4 border-slate-800/50 shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt={personalInfo.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
