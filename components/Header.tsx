'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Header() {
  const lightRef = useRef(null);
  const rayRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      lightRef.current,
      { scaleX: 0, opacity: 0, transformOrigin: 'center' },
      { scaleX: 1, opacity: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        rayRef.current,
        { opacity: 0, scaleY: 0 },
        { opacity: 1, scaleY: 1, duration: 1.2, transformOrigin: 'top center', ease: 'power2.out' },
        "-=0.5"
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        "-=0.5"
      );
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-dark grid-bg text-white overflow-hidden px-4">
      {/* Website Name at the Top */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 font-montserrat text-2xl font-bold tracking-widest z-40 select-none">
        FlipWise
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 1, ease: "easeOut" },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute -left-32 md:-left-48 lg:-left-64 z-30"
        >
          <Image
            src="/Switch.svg"
            alt="Switch"
            width={400}
            height={400}
            className="w-[300px] md:w-[400px]"
          />
        </motion.div>
     
        {/* Title and Content */}
        <div className="text-center space-y-4 z-30 -translate-y-12">
          <motion.h1
            ref={titleRef}
            className="font-montserrat text-[3rem] md:text-[7rem] font-extrabold bg-gradient-to-r from-yellow-200 via-purple-400 to-blue-300 text-transparent bg-clip-text drop-shadow-lg"
          >
            Learn through  <br /> flashcards
          </motion.h1>

          <p className="text-lg text-zinc-200">Choose a challenge that excites you. Build with your vision.</p>
        </div>
      </div>
    </section>
  );
}
