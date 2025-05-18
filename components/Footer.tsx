"use client"

import React from 'react';


export default function Footer() {
  return (
    <footer id="socials-section" className="w-full flex justify-center items-center py-16 bg-transparent">
      <div className="flex items-center justify-center w-full max-w-5xl">
        {/* Main Footer Content Box */}
        <div className="relative max-w-3xl w-full rounded-3xl p-8 md:p-12 mx-auto bg-gradient-to-br from-[#a259f7] via-[#7b2ff2] to-[#181c3a] shadow-2xl flex-1 text-center">
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            {/* Envelope Icon */}
            <a 
              href="mailto:ashutoshswain7383@gmail.com"
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" rx="20" fill="url(#paint0_linear)"/>
                <path d="M20 28C20 25.7909 21.7909 24 24 24H56C58.2091 24 60 25.7909 60 28V52C60 54.2091 58.2091 56 56 56H24C21.7909 56 20 54.2091 20 52V28Z" fill="white"/>
                <path d="M20 28L40 44L60 28" stroke="#a259f7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a259f7"/>
                    <stop offset="0.5" stopColor="#7b2ff2"/>
                    <stop offset="1" stopColor="#181c3a"/>
                  </linearGradient>
                </defs>
              </svg>
            </a>

            {/* GitHub Icon */}
            <a 
              href="https://github.com/ASHUTOSH-SWAIN-GIT" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" rx="20" fill="url(#paint0_linear)"/>
                <path d="M40 24C31.164 24 24 31.164 24 40C24 47.032 28.534 52.94 34.86 54.694C35.76 54.85 36.044 54.29 36.044 53.804C36.044 53.36 36.028 52.324 36.02 50.974C31.642 51.91 30.576 48.574 30.576 48.574C29.748 46.486 28.548 45.926 28.548 45.926C26.884 44.82 28.676 44.84 28.676 44.84C30.524 44.962 31.476 46.684 31.476 46.684C33.116 49.646 35.832 48.654 36.082 48.184C36.236 47.018 36.686 46.226 37.186 45.778C33.676 45.326 29.982 43.826 29.982 37.764C29.982 35.954 30.676 34.474 31.512 33.312C31.336 32.85 30.722 31.124 31.692 28.846C31.692 28.846 33.226 28.354 35.998 30.472C37.28 30.064 38.66 29.86 40.026 29.854C41.38 29.86 42.76 30.064 44.044 30.472C46.814 28.354 48.344 28.846 48.344 28.846C49.316 31.124 48.702 32.85 48.526 33.312C49.366 34.474 50.054 35.954 50.054 37.764C50.054 43.844 46.354 45.32 42.834 45.762C43.464 46.312 44.024 47.404 44.024 49.064C44.024 51.424 44 53.204 44 53.804C44 54.294 44.276 54.86 45.194 54.694C51.466 52.936 56 47.03 56 40C56 31.164 48.836 24 40 24Z" fill="white"/>
              </svg>
            </a>

            {/* Twitter Icon */}
            <a 
              href="https://x.com/LowKeyDevs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" rx="20" fill="url(#paint0_linear)"/>
                <path d="M53.92 31.798C52.844 32.284 51.692 32.618 50.48 32.77C51.716 32.032 52.668 30.866 53.12 29.486C51.966 30.16 50.694 30.646 49.34 30.914C48.26 29.758 46.704 29 44.974 29C41.654 29 38.962 31.692 38.962 35.012C38.962 35.486 39.014 35.946 39.116 36.388C34.098 36.136 29.664 33.724 26.714 30.106C26.194 31 25.9 32.032 25.9 33.132C25.9 35.222 26.988 37.076 28.65 38.188C27.676 38.158 26.758 37.892 25.954 37.45C25.954 37.476 25.954 37.502 25.954 37.528C25.954 40.466 28.05 42.9 30.832 43.454C30.324 43.586 29.788 43.656 29.234 43.656C28.842 43.656 28.462 43.618 28.092 43.548C28.864 45.942 31.11 47.69 33.772 47.738C31.682 49.36 29.072 50.326 26.248 50.326C25.76 50.326 25.278 50.298 24.804 50.242C27.494 51.958 30.668 52.958 34.072 52.958C44.96 52.958 50.882 43.746 50.882 35.754C50.882 35.494 50.876 35.234 50.864 34.976C52.032 34.14 53.054 33.108 53.92 31.928V31.798Z" fill="white"/>
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a 
              href="https://www.linkedin.com/in/ashutosh-swain-8154a3308/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" rx="20" fill="url(#paint0_linear)"/>
                <path d="M30 26C28.344 26 27 27.344 27 29C27 30.656 28.344 32 30 32C31.656 32 33 30.656 33 29C33 27.344 31.656 26 30 26ZM27 34V54H33V34H27ZM37 34V54H42.5V44.5C42.5 39.5 48.5 39 48.5 44.5V54H54V42.5C54 34 45 34.5 42.5 38.5V34H37Z" fill="white"/>
              </svg>
            </a>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Stay Connected</h2>
          {/* Description */}
          <p className="text-lg text-zinc-200 mb-8">Want updates, tips, and spotlight features straight to your inbox? Subscribe to the Outlier Coder's Newsletter.</p>
        </div>
      </div>
    </footer>
  );
}