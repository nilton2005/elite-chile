"use client";
import React, { useEffect, useRef } from "react";

export default function SponsorsBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let position = -25; // Base center position
    let lastScrollY = window.scrollY;
    
    // Set an extremely slow, constant base speed.
    const baseVelocity = -0.02; 
    let currentVelocity = baseVelocity;
    let targetVelocity = baseVelocity;
    
    let animationFrameId: number;

    const update = () => {
      // 1. Smoothly interpolate the target velocity back to base velocity over time
      // Lower factor = takes longer to lose the momentum
      targetVelocity += (baseVelocity - targetVelocity) * 0.02;
      
      // 2. Smoothly ease the current velocity towards the target velocity to prevent sudden jerks
      // Lower factor = feels more buttery when changing directions (reversing from left to right)
      currentVelocity += (targetVelocity - currentVelocity) * 0.03;
      
      position += currentVelocity;

      // Wrap-around for infinite scroll
      if (position <= -50) {
        position += 50;
      } else if (position >= 0) {
        position -= 50;
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${position}%, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(update);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Determine delta-based push. 
      // Down = Right (+), Up = Left (-). 
      // Slightly more push to compensate for the very heavy easing above.
      let scrollPush = delta * 0.005; 

      // Clamp the push so it doesn't spin wildly during fast scrolls
      if (scrollPush > 1.2) scrollPush = 1.2;
      if (scrollPush < -1.2) scrollPush = -1.2;

      // Add the push to the target velocity ONLY (not immediate velocity) 
      // so the animation loop can smoothly interpolate it
      targetVelocity += scrollPush;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="bg-surface-container-lowest py-8 overflow-hidden relative border-y border-outline-variant/10">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
      
      <div 
        ref={containerRef}
        className="flex w-[200%] ease-linear"
        style={{ willChange: "transform" }}
      >
        <div className="flex items-center justify-around w-1/2 px-4 opacity-40 grayscale hover:grayscale-0 transition-all ease-luxury duration-700">
          <span className="ornamental-logo !text-sm">HERMÈS</span>
          <span className="ornamental-logo !text-sm">CHANEL</span>
          <span className="ornamental-logo !text-sm">RITZ-CARLTON</span>
          <span className="ornamental-logo !text-sm">PORSCHE</span>
          <span className="ornamental-logo !text-sm">ROLEX</span>
        </div>
        <div className="flex items-center justify-around w-1/2 px-4 opacity-40 grayscale hover:grayscale-0 transition-all ease-luxury duration-700">
          <span className="ornamental-logo !text-sm">HERMÈS</span>
          <span className="ornamental-logo !text-sm">CHANEL</span>
          <span className="ornamental-logo !text-sm">RITZ-CARLTON</span>
          <span className="ornamental-logo !text-sm">PORSCHE</span>
          <span className="ornamental-logo !text-sm">ROLEX</span>
        </div>
      </div>
    </section>
  );
}
