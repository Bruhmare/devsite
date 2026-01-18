"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export interface FloatingDockProps {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    onClick?: () => void;
  }[];
  className?: string;
  mobileClassName?: string;
}

export function FloatingDock({ items, className, mobileClassName }: FloatingDockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn(
        "flex items-center gap-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-4 py-2",
        mobileClassName
      )}>
        {items.map((item, index) => (
          <motion.button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              if (item.onClick) {
                item.onClick();
              }
            }}
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 transition-colors duration-200 relative"
            title={item.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ 
              scale: 1.2,
              y: -8,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-6 h-6"
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {item.icon}
            </motion.div>
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 2, x: "-50%" }}
                  className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </div>
  );
}