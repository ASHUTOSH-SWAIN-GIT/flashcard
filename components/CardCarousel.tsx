"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface Card {
  id: number;
  title: string;
}

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showThumbsUp, setShowThumbsUp] = useState(false);
  const [cards] = useState<Card[]>([
    { id: 1, title: "What is the output of `console.log(2 + '2')`?" },
    { id: 2, title: "What is the difference between `let` and `const` in JavaScript?" },
    { id: 3, title: "What is a closure in JavaScript?" },
    { id: 4, title: "What is the purpose of the `useEffect` hook in React?" },
    { id: 5, title: "What is the difference between `==` and `===` in JavaScript?" },
    { id: 6, title: "Which country is home to the kangaroo?" },
    { id: 7, title: "What is the main ingredient in guacamole?" },
    { id: 8, title: "Who painted the Mona Lisa?" },
    { id: 9, title: "What is the largest ocean on Earth?" },
    { id: 10, title: "Which element has the chemical symbol 'O'?" },
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

  const handleKnow = () => {
    setShowThumbsUp(true);
    setTimeout(() => {
      setShowThumbsUp(false);
      nextCard();
    }, 1500);
  };

  const handleDontKnow = () => {
    nextCard();
  };

  return (
    <div id="cards-section" className="relative w-full h-[600px] flex items-center justify-center overflow-hidden py-16">
      {/* Navigation Buttons */}
      <button
        onClick={prevCard}
        className="absolute left-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
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
        className="absolute right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
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
                ref={(el) => {
                  if (el) cardRefs.current[index] = el;
                }}
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
                  rotate: isCurrent ? 0 : isLeft ? -10 : isRight ? 10 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute w-[500px] h-[600px] bg-gradient-to-b from-[#1a1e3a] to-[#7b1ff6] rounded-2xl shadow-2xl overflow-hidden border border-white/10"
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-white font-sans px-8">
                  <div className="text-3xl md:text-4xl font-bold text-center mb-8 max-w-[90%] break-words">
                    {card.title}
                  </div>
                  <div className="mt-10 flex gap-4 relative">
                    <button 
                      onClick={handleKnow}
                      className="px-6 py-2 bg-white text-[#1a1e3a] font-semibold rounded-lg shadow hover:bg-gray-100 transition-colors"
                    >
                      Know
                    </button>
                    <button 
                      onClick={handleDontKnow}
                      className="px-6 py-2 bg-white text-[#1a1e3a] font-semibold rounded-lg shadow hover:bg-gray-100 transition-colors"
                    >
                      Don&apos;t Know
                    </button>
                    {/* Thumbs Up Animation */}
                    <AnimatePresence>
                      {showThumbsUp && isCurrent && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute -top-20 left-1/2 -translate-x-1/2"
                        >
                          <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: -20 }}
                            transition={{ 
                              duration: 1.5,
                              ease: "easeOut"
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-16 w-16 text-green-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                              />
                            </svg>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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