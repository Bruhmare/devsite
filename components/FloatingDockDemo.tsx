"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";

export function FloatingDockDemo() {
  const scrollToSection = (sectionId: string) => {
    let scrollPosition = 0;
    
    switch (sectionId) {
      case 'hero-section':
        scrollPosition = 0;
        break;
      case 'second-section':
        scrollPosition = window.innerHeight;
        break;
      case 'third-section':
        scrollPosition = window.innerHeight * 2;
        break;
    }
    
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  const links = [
    {
      title: "Home",
      icon: (
        <svg className="h-full w-full text-neutral-500 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      href: "#hero-section",
      onClick: () => scrollToSection("hero-section"),
    },
    {
      title: "Projects",
      icon: (
        <svg className="h-full w-full text-neutral-500 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      href: "#second-section",
      onClick: () => scrollToSection("second-section"),
    },
    {
      title: "Twitter",
      icon: (
        <svg className="h-full w-full text-neutral-500 dark:text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: "#third-section",
      onClick: () => scrollToSection("third-section"),
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
}