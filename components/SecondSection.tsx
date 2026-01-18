"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SecondSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('second-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div 
      id="second-section"
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/second-section-image.png')"
      }}
    >
      {/* Projects Title */}
      <motion.div 
        className="absolute top-8 w-full flex justify-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          delay: 0.2
        }}
      >
        <motion.div
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer"
        >
          <Image 
            src={`/projects-text.png?v=${new Date().getTime()}`}
            alt="Projects" 
            width={600}
            height={150}
            className="max-w-lg"
          />
        </motion.div>
      </motion.div>

      {/* Three Project Text Layout */}
      <motion.div 
        className="absolute top-[35%] w-full flex justify-center items-center gap-32 px-8 z-10"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
        transition={{ 
          duration: 1.5, 
          ease: "easeOut",
          delay: 0.5
        }}
      >
        {/* Left Project - Upcoming */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.3
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer text-center"
        >
          <h3 
            className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wider cinzel-font"
          >
            UPCOMING
          </h3>
          <p 
            className="text-gray-400 text-lg md:text-xl cinzel-font"
          >
            New project coming soon
          </p>
        </motion.div>

        {/* Center Project - Ghostlink */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.2
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer text-center"
        >
          {/* Logo above text */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 1.0, 
              ease: "easeOut",
              delay: 0.4
            }}
          >
            <Image 
              src="/project-logo-modified.png"
              alt="Ghostlink Logo" 
              width={120}
              height={120}
              className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto"
            />
          </motion.div>

          <h3 
            className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wider cinzel-font"
          >
            GHOSTLINK
          </h3>
          <p 
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4 cinzel-font"
          >
            Privacy-first payment solutions
          </p>
          
          <a
            href="https://x.com/GhostlinkFi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-lg cinzel-font"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            @GhostlinkFi
          </a>
        </motion.div>

        {/* Right Project - Upcoming */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.4
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer text-center"
        >
          <h3 
            className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wider cinzel-font"
          >
            UPCOMING
          </h3>
          <p 
            className="text-gray-400 text-lg md:text-xl cinzel-font"
          >
            New project coming soon
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}