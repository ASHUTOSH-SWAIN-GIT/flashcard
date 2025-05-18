"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function DecksSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const trophyRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0]?.parentElement,
            start: "top 80%",
            once: true,
          },
        }
      );
    }

    // Trophy animation
    if (trophyRef.current) {
      gsap.fromTo(
        trophyRef.current,
        { 
          scale: 0.8,
          opacity: 0,
          y: 20,
          rotate: -5
        },
        {
          scale: 1,
          opacity: 0.15,
          y: 0,
          rotate: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: trophyRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative w-full py-16 px-4 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#001731' }}>
      {/* Trophy Image */}
      <motion.div
        ref={trophyRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] pointer-events-none"
      >
        <Image
          src="/trophy.svg"
          alt="Trophy"
          fill
          className="object-contain opacity-15"
          priority
        />
      </motion.div>

      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-extrabold text-white/10 text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none tracking-tight uppercase">
          LETS PLAY!
        </span>
      </div>
      {/* Foreground content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2
          className="mt-20 w-full max-w-6xl text-5xl md:text-6xl font-extrabold text-center font-montserrat bg-gradient-to-b from-[#b3c6ff] to-[#7b9fff] text-transparent bg-clip-text drop-shadow-lg"
          style={{ letterSpacing: "-0.03em" }}
        >
          DECK
        </h2>
      </div>
    </section>
  );
} 