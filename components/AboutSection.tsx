"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const aboutPoints = [
  'Flipwise brings flashcards to life with smooth animations and a clean interface that makes studying more engaging..',
  'Use the "Know" and "Dont Know" buttons to track your understanding in real time — no account needed.',
  'Crafted with Next.js, Framer Motion, and GSAP for a fast, responsive, and beautifully animated learning experience.',
];

export default function AboutSection() {
  const propRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (propRef.current) {
      gsap.to(propRef.current, {
        y: 24,
        rotate: 8,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <section className="w-full flex justify-center items-center min-h-[70vh] py-12 px-2 bg-transparent">
      <div
        className="relative max-w-6xl w-full rounded-3xl p-2 md:p-6 mx-auto bg-gradient-to-br from-[#a259f7] via-[#7b2ff2] to-[#181c3a]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl p-4 md:p-8">
          {/* Left Card */}
          <div className="bg-white rounded-2xl flex flex-col items-center justify-center p-8 relative shadow-xl">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-extrabold text-[#1a1446] text-center leading-tight mb-8 font-montserrat"
            >
              About <br /> FlipWise
            </motion.h2>
            <div ref={propRef} className="w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
              <Image src="/Navigation.svg" alt="Navigation prop" width={224} height={224} className="object-contain" />
            </div>
          </div>
          {/* Right Card */}
          <div className="bg-white rounded-2xl p-8 flex flex-col justify-center shadow-xl relative">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 mb-2"
            >
              Some people learn.
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-[#1a1446] mb-6"
            >
              You learn faster.
            </motion.h3>
            <div className="relative pl-8">
              {/* Vertical dotted line */}
              <div className="absolute left-2 top-4 bottom-4 w-0.5 border-l-2 border-dotted border-purple-500 z-0" />
              <ul className="space-y-8">
                {aboutPoints.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.15 }}
                    viewport={{ once: true }}
                    className="relative flex items-start font-sans"
                  >
                    {/* Purple circle */}
                    <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-white border-4 border-purple-500 z-10" />
                    <span className="text-base md:text-lg text-gray-800 font-medium pl-2">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 