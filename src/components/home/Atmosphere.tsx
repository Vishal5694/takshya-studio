"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Atmosphere() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".atmosphere-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".atmosphere-bg",
        { scale: 1.1, filter: "brightness(0.5)" },
        {
          scale: 1,
          filter: "brightness(1)",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-48 md:py-64 overflow-hidden w-full flex items-center justify-center">
      {/* Cinematic Background */}
      <div 
        className="atmosphere-bg absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542868725-3cb523f815be?q=80&w=2670&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-brand-black/70 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black z-20" />
      </div>

      <div className="relative z-30 max-w-4xl mx-auto px-6 text-center" ref={textRef}>
        <p className="atmosphere-text font-sans text-brand-amber uppercase tracking-[0.3em] text-sm mb-6 drop-shadow-md">
          The Emotion of Space
        </p>
        <h2 className="atmosphere-text font-serif text-4xl md:text-6xl lg:text-7xl text-brand-ivory leading-tight mb-8">
          Lighting That Changes <br />
          <span className="italic font-light text-brand-gold">The Feeling Of A Room</span>
        </h2>
        <p className="atmosphere-text font-light text-brand-ivory/80 text-lg md:text-xl max-w-2xl mx-auto">
          We don't just design light fixtures. We craft atmospheric experiences. 
          A single TAKSHYA STUDIO piece has the power to transform the mood, 
          warmth, and luxury of your environment.
        </p>
      </div>
    </section>
  );
}
