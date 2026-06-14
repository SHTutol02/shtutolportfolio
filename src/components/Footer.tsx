import React from 'react';
import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-12 border-t border-white/10 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          SAJJAD <span className="text-sky-500">HOSSAIN</span> TUTOL
        </h2>
        
        <div className="flex justify-center gap-6 mb-8">
          {Object.entries(personalInfo.socials).map(([key, url]) => (
            <a 
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 capitalize transition-colors"
            >
              {key}
            </a>
          ))}
        </div>
        
        <p className="text-slate-500 text-sm">
          &copy; {currentYear} Sajjad Hossain Tutol. All rights reserved. <br className="md:hidden" />
          <span className="hidden md:inline"> | </span> 
          Based in {personalInfo.address}
        </p>
      </div>
    </footer>
  );
}
