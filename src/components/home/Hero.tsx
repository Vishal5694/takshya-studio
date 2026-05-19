"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Button from "@/components/Button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<{width: string, height: string, top: string, left: string, animation: string, animationDelay: string}[]>([]);

  useEffect(() => {
    const generatedParticles = [...Array(15)].map(() => ({
      width: Math.random() * 8 + 4 + 'px',
      height: Math.random() * 8 + 4 + 'px',
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 5}s`,
    }));
    setParticles(generatedParticles);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power4.out", delay: 0.5 }
      );
      
      gsap.fromTo(
        ".hero-bg",
        { scale: 1.1 },
        { scale: 1, duration: 2.5, ease: "power2.out" }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image - Warm sculptural lighting focus */}
      <div 
        className="hero-bg absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2670&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black/90 z-10" />
      </div>

      {/* Floating Light Particles */}
      <div className="absolute inset-0 z-15 overflow-hidden pointer-events-none opacity-50">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-amber blur-md opacity-30"
            style={style}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto" ref={textRef}>
        <p className="hero-text font-sans text-brand-amber tracking-[0.4em] uppercase text-xs md:text-sm mb-6 drop-shadow-md">
          A Symphony of Illumination
        </p>
        <h1 className="hero-text font-serif text-5xl md:text-7xl lg:text-8xl text-brand-ivory leading-tight mb-8 drop-shadow-lg">
          Luxury Crafted <br/>
          <span className="italic font-light text-brand-gold">Into Light</span>
        </h1>
        <p className="hero-text font-light text-brand-ivory/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Sculptural wooden lighting handcrafted for timeless interiors. Where organic warmth meets architectural precision.
        </p>
        
        <div className="hero-text flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button href="/collections" variant="primary">
            Explore Collection
          </Button>
          <Button href="/contact" variant="outline">
            Book Consultation
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hero-text absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-brand-amber/60 font-sans uppercase tracking-[0.2em] text-[0.6rem] mb-4">Discover Illumination</span>
        <div className="w-[1px] h-16 bg-brand-charcoal overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-amber animate-[scrollDown_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(200,155,109,0.8)]" />
        </div>
      </div>
    </section>
  );
}
