/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ProjectGallery from './components/ProjectGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200; // offset for triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="app-root" className="min-h-screen bg-[#0a0a0a] flex flex-col text-stone-400 font-sans selection:bg-white/10 selection:text-white">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <Hero />

        {/* Dynamic Skills Grid */}
        <Skills />

        {/* Experience Timeline */}
        <Experience />

        {/* Interactive Gallery */}
        <ProjectGallery />

        {/* Contact Form */}
        <ContactForm />
      </main>

      {/* Footer Block */}
      <Footer />
    </div>
  );
}
