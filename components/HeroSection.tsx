"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimateDemo } from "@/components/TextAnimateDemo";

export function HeroSection() {
  return (
    <div 
      id="hero-section"
      className="w-screen h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/hero-image.png')"
      }}
    >
      <motion.div 
        className="absolute top-[15%] left-8 transform -translate-y-1/2 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          delay: 0.3
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
            src="/dev-profile-text.png" 
            alt="Dev Profile" 
            width={1200}
            height={450}
            className="max-w-4xl"
          />
        </motion.div>
      </motion.div>
      <TextAnimateDemo />
    </div>
  );
}