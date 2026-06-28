/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#141414] border border-white/10 text-white font-mono text-base transition-transform group-hover:scale-105">
            HL
          </span>
          <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
              Hollis Lam
            </span>
            <span className="absolute left-0 top-0 inline-block translate-y-full text-stone-300 transition-transform duration-300 group-hover:translate-y-0">
              Portfolio
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-stone-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="h-4 w-[1px] bg-white/10" />

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-stone-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-stone-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-stone-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/10 shadow-xl py-4 px-6 flex flex-col gap-4 animate-fadeIn">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl font-sans text-base font-semibold transition-colors ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-stone-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="h-[1px] bg-white/10" />

          <div className="flex items-center gap-4 px-4 py-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-stone-400 hover:text-white"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-stone-400 hover:text-white"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
