"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThirdSection() {
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

    const element = document.getElementById('third-section');
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
      id="third-section"
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/third-section-image.png')"
      }}
    >
      <motion.div 
        className="absolute top-[38%] w-full flex justify-center items-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ 
          duration: 1.5, 
          ease: "easeOut",
          delay: 0.3
        }}
      >
        <motion.a
          href="http://x.com/Bruhmare_"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          whileHover={{ 
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Image 
            src={`/contact-text.png?v=${new Date().getTime()}`}
            alt="Contact" 
            width={1000}
            height={250}
            className="max-w-4xl"
          />
        </motion.a>
      </motion.div>
    </div>
  );
}