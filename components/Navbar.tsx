"use client"

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', section: 'about-section' },
  { label: 'Deck', section: 'cards-section' },
  { label: 'Socials', section: 'socials-section' },
];

export const Navbar = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('about-section');
  const manualOverride = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      manualOverride.current = true;
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        manualOverride.current = false;
      }, 1200); // Adjust delay as needed for scroll duration
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (manualOverride.current) return;
      const about = document.getElementById('about-section');
      const deck = document.getElementById('cards-section');
      const socials = document.getElementById('socials-section');
      if (!about || !deck || !socials) return;
      const aboutRect = about.getBoundingClientRect();
      const deckRect = deck.getBoundingClientRect();
      const socialsRect = socials.getBoundingClientRect();
      if (aboutRect.top <= 100 && aboutRect.bottom > 100) {
        setActiveSection('about-section');
      } else if (deckRect.top <= 100 && deckRect.bottom > 100) {
        setActiveSection('cards-section');
      } else if (socialsRect.top <= 100 && socialsRect.bottom > 100) {
        setActiveSection('socials-section');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full flex justify-center mt-4">
      <div className="bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 p-1 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between bg-[#060e2a] rounded-2xl px-6 py-2 min-w-[900px]">
          {/* Nav Links */}
          <div className="flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <button
                  onClick={() => scrollToSection(link.section)}
                  className={
                    activeSection === link.section
                      ? 'px-4 py-2 rounded-lg bg-gradient-to-tl from-purple-700 via-purple-500 to-yellow-300 text-white font-semibold shadow-md'
                      : 'px-4 py-2 rounded-lg text-white font-medium hover:bg-white/5 transition-colors duration-200'
                  }
                >
                  {link.label}
                </button>
                {/* Animated Underline */}
                <motion.div
                  className="absolute left-0 right-0 bottom-0 h-[2px] bg-white rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={
                    hoveredIdx === idx
                      ? { scaleX: 1, opacity: 1 }
                      : { scaleX: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ originX: 0.5 }}
                />
              </div>
            ))}
          </div>
          {/* GitHub Button */}
          <a 
            href="https://github.com/ASHUTOSH-SWAIN-GIT/flashcard"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 px-6 py-2 rounded-lg bg-gradient-to-tl from-yellow-300 via-purple-500 to-purple-700 text-black font-semibold shadow-md relative hover:opacity-90 transition-opacity"
          >
            <span className="relative z-10">Star on GitHub →</span>
            <span className="absolute inset-0 rounded-lg bg-gradient-to-tl from-yellow-300 via-purple-500 to-purple-700 opacity-40 blur-lg z-0" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
