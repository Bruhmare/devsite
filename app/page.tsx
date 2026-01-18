"use client";
import { ReactLenis } from 'lenis/react';
import { HeroSection } from "@/components/HeroSection";
import { SecondSection } from "@/components/SecondSection";
import { ThirdSection } from "@/components/ThirdSection";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";

export default function Home() {
  return (
    <ReactLenis root>
      <main className='bg-black'>
        <div className='wrapper'>
          <section className='h-screen w-full sticky top-0'>
            <HeroSection />
          </section>
          
          <section className='h-screen w-full sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
            <SecondSection />
          </section>
          
          <section className='h-screen w-full sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
            <ThirdSection />
          </section>
        </div>
      </main>
      <FloatingDockDemo />
    </ReactLenis>
  );
}