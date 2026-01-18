"use client";
import { TextAnimate } from "@/components/ui/text-animate";

export function TextAnimateDemo() {
  return (
    <div className="absolute right-8 top-2/3 transform -translate-y-1/2 z-10 max-w-lg">
      <TextAnimate 
        animation="blurInUp" 
        by="word" 
        once
        className="text-white text-lg font-bold tracking-wider leading-relaxed cinzel-font hollow-knight-glow break-words"
      >
        "ECHO OF A PREVIOUS LIFE. MUST BE DEFEAT IN ORDER TO RETAKE ITS POWER AND BECOME WHOLE"
      </TextAnimate>
    </div>
  );
}