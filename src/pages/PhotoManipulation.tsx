import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function PhotoManipulation() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen pb-24">
      <div className="bg-[#020617] border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-medium">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
          <a href="#" className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-2">
             Live Preview <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto px-6 pt-16">
        <span className="text-rose-400 font-bold tracking-widest text-sm uppercase mb-4 block">Adobe Photoshop</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">Creative Photo Manipulation</h1>
        <div className="mt-12 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-video relative">
          <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" alt="Creative Photo Manipulation" className="w-full h-full object-cover" />
        </div>
        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-slate-400 text-lg leading-relaxed whitespace-pre-line">
              Advanced photo manipulation and retouching project blending multiple source images into a single cohesive, surreal artwork.
            </p>
          </section>
          <section className="bg-slate-900/50 p-8 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6">Technologies & Approach</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#0B111F] border border-white/10 rounded-lg text-slate-300 font-medium">Adobe Photoshop</span>
              <span className="px-4 py-2 bg-[#0B111F] border border-white/10 rounded-lg text-slate-300 font-medium">Lightroom</span>
            </div>
          </section>
          <section className="pt-8">
            <h2 className="text-2xl font-bold text-white mb-6">Project Gallery</h2>
            <div className="flex flex-col gap-12">
              <div className="bg-slate-900/40 border border-white/5 p-6 md:p-8 rounded-[2.5rem] shadow-xl">
                <div className="rounded-2xl overflow-hidden mb-8 border border-white/10">
                  <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" alt="Gallery item" className="w-full h-auto object-cover max-h-[800px]" />
                </div>
                <div className="px-2">
                  <h3 className="text-lg font-bold text-white mb-2">Description</h3>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
                    The surreal artwork highlighting intricate blending and composition.
                  </p>
                </div>
              </div>
              <div className="bg-slate-900/40 border border-white/5 p-6 md:p-8 rounded-[2.5rem] shadow-xl">
                <div className="rounded-2xl overflow-hidden mb-8 border border-white/10">
                  <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800" alt="Gallery item" className="w-full h-auto object-cover max-h-[800px]" />
                </div>
                <div className="px-2">
                  <h3 className="text-lg font-bold text-white mb-2">Description</h3>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
                    A close-up view emphasizing the detailed retouching and color grading.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
