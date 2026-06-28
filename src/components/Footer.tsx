/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowUp, Clock } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#050505] text-stone-400 border-t border-white/10 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Hand: Title */}
        <div className="text-center md:text-left space-y-1">
          <p className="font-display text-white font-bold text-lg">Hollis Lam</p>
          <p className="font-sans text-xs text-stone-500">Computer Science @ University of Bath</p>
        </div>

        {/* Middle Hand: Quick Links / Actions */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white rounded-xl border border-white/10 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white rounded-xl border border-white/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Right Hand: Clock & Top Trigger */}
        <div className="flex items-center gap-6">
          {time && (
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-stone-400 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-stone-300 animate-pulse" />
              <span>{time}</span>
            </div>
          )}

          <button
            onClick={handleScrollToTop}
            className="p-3 bg-white hover:bg-stone-200 text-black rounded-xl transition-colors cursor-pointer group shadow-lg"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-white/5 text-center text-xs text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Hollis Lam. All rights reserved.</p>
        <p className="font-mono text-stone-500">University of Bath Placement Portfolio</p>
      </div>
    </footer>
  );
}
