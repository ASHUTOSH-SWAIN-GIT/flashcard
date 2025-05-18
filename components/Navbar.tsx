"use client"

import  { useState } from 'react'
import { motion } from 'framer-motion';

const navLinks = [
  'About',
  'How It Works',
  'Judging Criteria',
  'Timeline',
  'Prizes',
  'Rules',
];

export const Navbar = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <nav className="w-full flex justify-center mt-4">
      <div className="bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 p-1 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between bg-[#060e2a] rounded-2xl px-6 py-2 min-w-[900px]">
          {/* Nav Links */}
          <div className="flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <div
                key={link}
                className="relative"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <button
                  className={
                    idx === 0
                      ? 'px-4 py-2 rounded-lg bg-gradient-to-tl from-purple-700 via-purple-500 to-yellow-300 text-white font-semibold shadow-md'
                      : 'px-4 py-2 rounded-lg text-white font-medium hover:bg-white/5 transition-colors duration-200'
                  }
                >
                  {link}
                </button>
                {/* Animated Underline */}
                {idx !== 0 && (
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
                )}
              </div>
            ))}
          </div>
          {/* Submit Now Button */}
          <button className="ml-8 px-6 py-2 rounded-lg bg-gradient-to-tl from-yellow-300 via-purple-500 to-purple-700 text-black font-semibold shadow-md relative">
            <span className="relative z-10">Submit Now →</span>
            <span className="absolute inset-0 rounded-lg bg-gradient-to-tl from-yellow-300 via-purple-500 to-purple-700 opacity-40 blur-lg z-0" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
