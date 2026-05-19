"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "450+", label: "Handcrafted Pieces" },
  { value: "80+", label: "Luxury Clients" },
  { value: "35+", label: "Custom Installations" },
  { value: "15+", label: "Cities Served" },
];

export default function Stats() {
  const containerRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        numbersRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 lg:px-8 bg-brand-black border-y border-brand-charcoal relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-amber/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => { numbersRef.current[index] = el; }}
            >
              <div className="font-serif text-5xl md:text-6xl text-brand-gold mb-4 drop-shadow-sm">
                {stat.value}
              </div>
              <div className="font-sans text-brand-ivory/60 uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
