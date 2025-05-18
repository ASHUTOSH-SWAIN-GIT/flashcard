"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const decks = [
  {
    title: "JavaScript Essentials",
    description: "Master the basics of JS, from variables to ES6 features.",
  },
  {
    title: "React Fundamentals",
    description: "Key concepts for building modern React apps.",
  },
  {
    title: "Data Structures",
    description: "Flashcards for arrays, stacks, queues, and more.",
  },
  {
    title: "Web APIs",
    description: "Quiz yourself on DOM, Fetch, Storage, and browser APIs.",
  },
  {
    title: "CSS Tricks",
    description: "Selectors, Flexbox, Grid, and responsive design tips.",
  },
  {
    title: "TypeScript Basics",
    description: "Types, interfaces, generics, and type safety in TS.",
  },
];

export default function DecksSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

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
  }, []);

  return (
    <section className="relative w-full py-16 px-4 flex flex-col items-center bg-gradient-to-br from-[#181c3a] via-[#2d1e6b] to-[#7b2ff2] overflow-hidden">
      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-extrabold text-white/10 text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none tracking-tight uppercase">
          Lets play
        </span>
      </div>
      {/* Foreground content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center font-montserrat">
          Explore Decks
        </h2>
      </div>
    </section>
  );
}
