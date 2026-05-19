"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    id: "live-edge-lamps",
    title: "Live Edge Floor Lamps",
    image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=2680&auto=format&fit=crop",
  },
  {
    id: "ambient-wall",
    title: "Ambient Wall Lights",
    image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=2620&auto=format&fit=crop",
  },
  {
    id: "sculptural-table",
    title: "Sculptural Table Lamps",
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "bespoke-installations",
    title: "Bespoke Installations",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2574&auto=format&fit=crop",
  },
];

export default function FeaturedCollections() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 lg:px-8 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-sans text-brand-amber uppercase tracking-[0.2em] text-sm mb-4">
              Curated Selection
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-ivory">
              Featured <span className="italic font-light text-brand-gold">Collections</span>
            </h3>
          </div>
          <Link 
            href="/collections" 
            className="group flex items-center gap-4 text-brand-ivory hover:text-brand-amber transition-colors mt-6 md:mt-0 pb-2 border-b border-brand-charcoal hover:border-brand-amber"
          >
            <span className="font-sans uppercase tracking-widest text-xs">View All</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.id}`}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group block relative overflow-hidden aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] rounded-sm"
            >
              <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-amber/20 mix-blend-overlay transition-colors duration-700 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent z-10" />
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="overflow-hidden">
                  <h4 className="font-serif text-3xl text-brand-ivory transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out group-hover:text-brand-amber">
                    {collection.title}
                  </h4>
                </div>
                <div className="overflow-hidden mt-4">
                  <div className="w-12 h-[1px] bg-brand-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-100 ease-out" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
