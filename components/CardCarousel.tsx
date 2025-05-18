"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface Card {
  id: number;
  title: string;
  question: string;
}

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards] = useState<Card[]>([
    { id: 1, title: "Question 1", question: "What is the capital of France?" },
    { id: 2, title: "Question 2", question: "What is the largest planet in our solar system?" },
    { id: 3, title: "Question 3", question: "Who painted the Mona Lisa?" },
    { id: 4, title: "Question 4", question: "What is the chemical symbol for gold?" },
    { id: 5, title: "Question 5", question: "What is the largest ocean on Earth?" },
  ]);

  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (cardRefs.current.length) {
      gsap.fromTo(
        cardRefs.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={prevCard}
        className="absolute left-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextCard}
        className="absolute right-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Cards Container */}
      <div
        ref={carouselRef}
        className="relative w-full h-full flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {cards.map((card, index) => {
            const isCurrent = index === currentIndex;
            const isLeft = index === (currentIndex - 1 + cards.length) % cards.length;
            const isRight = index === (currentIndex + 1) % cards.length;

            return (
              <motion.div
                key={card.id}
                ref={(el) => { cardRefs.current[index] = el }}
                initial={false}
                animate={{
                  x: isCurrent
                    ? 0
                    : isLeft
                    ? "-120%"
                    : isRight
                    ? "120%"
                    : 0,
                  scale: isCurrent ? 1 : 0.8,
                  opacity: isCurrent ? 1 : 0.5,
                  zIndex: isCurrent ? 20 : 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute w-[500px] h-[600px] bg-gradient-to-br from-[#1a2b3c] via-[#2a3b4c] to-[#3a4b5c] rounded-2xl shadow-2xl overflow-hidden border border-white/10"
              >
                <div className="w-full h-full flex flex-col items-center justify-between p-8">
                  <div className="text-white/80 text-xl font-medium">{card.title}</div>
                  <div className="text-white text-3xl font-bold text-center">{card.question}</div>
                  <div className="flex gap-6 w-full">
                    <button className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105">
                      Don't Know
                    </button>
                    <button className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105">
                      Know
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
} 