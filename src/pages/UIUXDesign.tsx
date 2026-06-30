import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function UIUXDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6 pt-16"
      >
        <span className="text-rose-400 font-bold tracking-widest text-sm uppercase mb-4 block">
          User Interface
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          UI/UX Application Design
        </h1>

        <div className="mt-12 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-video relative">
          <img 
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" 
            alt="UI/UX Application Design" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-slate-400 text-lg leading-relaxed whitespace-pre-line">
              User interface and experience design for a modern mobile application. Focus was placed on smooth animations, clean typography, and adherence to mobile accessibility standards.
            </p>
          </section>

          <section className="bg-slate-900/50 p-8 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6">Technologies & Approach</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#0B111F] border border-white/10 rounded-lg text-slate-300 font-medium">Frontend: React JSX </span>
              <span className="px-4 py-2 bg-[#0B111F] border border-white/10 rounded-lg text-slate-300 font-medium">Styling: Tailwind CSS </span>
              <span className="px-4 py-2 bg-[#0B111F] border border-white/10 rounded-lg text-slate-300 font-medium">Routing: React Router DOM</span>
            </div>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-bold text-white mb-6">Project Gallery</h2>
            <div className="flex flex-col gap-12">
              <div className="bg-slate-900/40 border border-white/5 p-6 md:p-8 rounded-[2.5rem] shadow-xl">
                <div className="rounded-2xl overflow-hidden mb-8 border border-white/10">
                  <img src="/01 Sim.jpg" 
                alt="Gallery item" className="w-full h-auto object-cover max-h-[800px]" />
                </div>
                <div className="px-2">
                  <h3 className="text-2xl underline font-bold text-white mb-2">Description:</h3>
                  <h4 className="text-xl font-bold text-white mb-2">Project: SIM Group Website</h4>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line"></p>
                  <span className="text-slate-300 font-bold">Role:</span> Executive (Planning) & Lead Developer / Designer
                  <br /><span className="text-slate-300 font-bold">Tech Stack:</span> React, Python, SQL, Adobe Photoshop
                  <br /><span className="text-slate-300 font-bold">Live/Demo Link:</span> <a href="https://sim-group.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">View Live Demo</a>
                  <br />
                  <br />
                  <h5 className="text-lg font-bold text-white mb-2">Project Overview</h5>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
                    Spearheaded the digital planning and development of the corporate web interface for <span className="text-slate-300 font-bold">SIM Group</span>, a massive industrial conglomerate in Bangladesh celebrating 26 years of operation. The goal was to translate the company’s extensive physical footprint—including a $102M+ turnover, 4000+ workforce, and multiple subsidiary concerns—into a cohesive, modern, and highly performant digital experience.
                  <br />
                  <br />The project required balancing a clean, professional aesthetic with the technical architecture needed to manage complex corporate data, product catalogs, and sustainability reports.
                  <br />
                  </p>
                  <br />
                  <h4 className="text-lg font-bold text-white mb-2">Key Features & Architecture</h4>
                  <br />
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
                   <ul className="list-disc pl-5 text-slate-300 space-y-2">
                      <li><strong>Dynamic Data Presentation:</strong> Designed a card-based UI grid to easily navigate SIM Group’s diverse product lines, from raw yarn and knit fabrics to sustainable chemicals and agro-products.
                      </li>
                      <li><strong>Dual-Theme UI Design:</strong> Implemented a modern dual-color aesthetic, utilizing dark-mode panels for strategic vision and core values to contrast with clean, white layouts for the company's historical milestones and leadership profiles.
                      </li>
                      <li><strong>Sustainability Dashboard:</strong> Structured a dedicated technical section to showcase the Advanced Biological ETP (Effluent Treatment Plant). Translated complex operational parameters (e.g., 98%+ BOD removal, 25% water reuse) into digestible, visually appealing data points.
                      </li>
                      <li><strong>Performance Optimization:</strong> Leveraged React’s lazy loading and code splitting to ensure fast load times despite the site’s rich media content.
                      </li>
                    </ul>
                </p>
                <br />
                  <h4 className="text-lg font-bold text-white mb-2">My Contributions</h4>
                  <br />
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
                   <ul className="list-disc pl-5 text-slate-300 space-y-2">
                      <li><strong>Strategic Planning:</strong> As an Executive (Planning), I mapped out the information architecture to ensure the digital footprint accurately reflected the company's global impact, local roots, and strategic vision for sustainable innovation.
                      </li>
                      <li><strong>Frontend Development:</strong> Built a responsive and interactive user interface (using React) that smoothly transitions between the company's history, executive board profiles, and technical product specifications.
                      </li>
                      <li><strong>Data Integration:</strong> Structured the backend systems (using Python and SQL) to allow for seamless updates to the product catalog and company metrics, ensuring the platform remains scalable as the company grows.
                      </li>
                    </ul>
                </p>
                </div>
              </div>
              <div className="bg-slate-900/40 border border-white/5 p-6 md:p-8 rounded-[2.5rem] shadow-xl">
                <div className="rounded-2xl overflow-hidden mb-8 border border-white/10">
                  <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" alt="Gallery item" className="w-full h-auto object-cover max-h-[800px]" />
                </div>
                <div className="px-2">
                  <h3 className="text-lg font-bold text-white mb-2">Description</h3>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
                    High-fidelity mockups showcasing the final color palette and typography.
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
