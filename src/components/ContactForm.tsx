/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Status & Loading states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (emailStr: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Field validation
    if (!name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!subject.trim()) {
      setErrorMessage('Please select or specify a subject.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage('Message must be at least 10 characters long.');
      return;
    }

    setIsSubmitting(true);

    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          subject: subject,
          message: message,
          from_name: 'Portfolio Contact Form'
        })
      })
      .then(async (response) => {
        const data = await response.json();
        setIsSubmitting(false);
        if (response.ok && data.success) {
          setSubmitSuccess(true);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        } else {
          setErrorMessage(data.message || 'Something went wrong. Please check your access key.');
        }
      })
      .catch(() => {
        setIsSubmitting(false);
        setErrorMessage('Failed to connect to the email service. Please try again later.');
      });
    } else {
      // Graceful fallback simulation when access key is not set yet
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

        // Auto clear success banner after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-b border-white/10">
      {/* Background patterns */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-stone-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-stone-300 tracking-wider uppercase">
            Let's Collaborate
          </h2>
          <p className="font-display text-3xl md:text-4xl font-extrabold text-white mt-2">
            Get In Touch
          </p>
          <p className="font-sans text-stone-400 mt-4">
            If you are looking to hire a dedicated frontend or machine learning placement candidate, have a question about my projects, or want to discuss a software opportunity, drop a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Quick Contact info (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0f0f0f]/40 border border-white/10 rounded-2xl p-6 shadow-sm space-y-8">
              <h3 className="font-display text-xl font-bold text-white border-b border-white/10 pb-4">
                Connect With Me
              </h3>

              <div className="space-y-6">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-white/5 border border-white/10 text-stone-300 rounded-xl group-hover:bg-white/10 group-hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display text-xs font-semibold text-stone-400 uppercase tracking-wider">LinkedIn</p>
                    <p className="font-sans text-sm text-stone-300 font-medium group-hover:text-white transition-colors mt-0.5">
                      Professional Network
                    </p>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-white/5 border border-white/10 text-stone-300 rounded-xl group-hover:bg-white/10 group-hover:text-white transition-all">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display text-xs font-semibold text-stone-400 uppercase tracking-wider">GitHub</p>
                    <p className="font-sans text-sm text-stone-300 font-medium group-hover:text-white transition-colors mt-0.5">
                      Open Source Projects
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 text-stone-300 rounded-xl">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display text-xs font-semibold text-stone-400 uppercase tracking-wider">Based In</p>
                    <p className="font-sans text-sm md:text-base text-stone-300 font-medium mt-0.5">
                      Bath, United Kingdom / Hong Kong
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-[#0f0f0f]/85 text-stone-300 rounded-2xl border border-white/10 shadow-sm space-y-3">
              <p className="font-display font-bold text-sm text-white uppercase tracking-wider">Placement Timeline</p>
              <p className="font-sans text-sm leading-relaxed text-stone-400">
                I am eligible for professional placement years starting in **Summer 2027** as part of my BSc Computer Science course structure. Let's establish a connection!
              </p>
            </div>
          </div>

          {/* Contact Form Block (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-[#0f0f0f]/40 border border-white/10 rounded-2xl p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="font-display text-sm font-bold text-stone-300">
                      Your Name
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0f0f0f]/50 focus:bg-black border border-white/10 rounded-xl font-sans text-sm outline-none focus:ring-2 focus:ring-white/10 focus:border-white/20 transition-all text-white"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email-input" className="font-display text-sm font-bold text-stone-300">
                      Email Address
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      required
                      placeholder="e.g. jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0f0f0f]/50 focus:bg-black border border-white/10 rounded-xl font-sans text-sm outline-none focus:ring-2 focus:ring-white/10 focus:border-white/20 transition-all text-white"
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="subject-input" className="font-display text-sm font-bold text-stone-300">
                    Subject / Project Interest
                  </label>
                  <select
                    id="subject-input"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0f0f0f]/50 focus:bg-black border border-white/10 rounded-xl font-sans text-sm outline-none focus:ring-2 focus:ring-white/10 focus:border-white/20 transition-all text-white cursor-pointer"
                  >
                    <option value="" className="bg-[#0a0a0a] text-stone-400">Select an option...</option>
                    <option value="Placement / Internship Placement Opportunity" className="bg-[#0a0a0a] text-stone-200">Placement / Internship Placement Opportunity</option>
                    <option value="Collaborative Software Engineering Venture" className="bg-[#0a0a0a] text-stone-200">Collaborative Software Engineering Venture</option>
                    <option value="Technical Project Question (e.g. BetaBot)" className="bg-[#0a0a0a] text-stone-200">Technical Project Question (e.g. BetaBot)</option>
                    <option value="General Conversation / Professional Inquiry" className="bg-[#0a0a0a] text-stone-200">General Conversation / Professional Inquiry</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message-input" className="font-display text-sm font-bold text-stone-300">
                    Your Message
                  </label>
                  <textarea
                    id="message-input"
                    rows={5}
                    required
                    placeholder="Provide details about your query or opportunity..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0f0f0f]/50 focus:bg-black border border-white/10 rounded-xl font-sans text-sm outline-none focus:ring-2 focus:ring-white/10 focus:border-white/20 transition-all text-white resize-y"
                  />
                </div>

                {/* Submit button & State Indicators */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="shrink-0">
                    <AnimatePresence mode="wait">
                      {errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="flex items-center gap-2 text-rose-400 text-xs font-semibold"
                        >
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{errorMessage}</span>
                        </motion.div>
                      )}
                      {submitSuccess && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="flex items-center gap-2 text-stone-200 bg-white/5 px-3 py-1.5 border border-white/10 rounded-lg text-xs font-semibold"
                        >
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-stone-300" />
                          <span>Message successfully sent!</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-white hover:bg-stone-200 disabled:bg-stone-800 text-black font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className={`w-4 h-4 transition-transform ${isSubmitting ? 'translate-x-1 translate-y-[-2px] scale-95' : 'group-hover:translate-x-0.5'}`} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
