"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: "luna-pendant",
    title: "Luna Pendant",
    category: "Sculptural Lighting",
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2670&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: "aurea-wall-sconce",
    title: "Aurea Wall Sconce",
    category: "Ambient Lighting",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2670&auto=format&fit=crop",
    colSpan: "col-span-1",
  },
  {
    id: "sylva-floor-lamp",
    title: "Sylva Floor Lamp",
    category: "Live Edge Lighting",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2574&auto=format&fit=crop",
    colSpan: "col-span-1",
  },
  {
    id: "ignis-chandelier",
    title: "Ignis Chandelier",
    category: "Architectural Installation",
    image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=2680&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectsRef.current.forEach((project, i) => {
        if (!project) return;
        
        gsap.fromTo(
          project,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: project,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-brand-black relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-amber/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[100rem] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 max-w-7xl mx-auto">
          <div>
            <h2 className="font-sans text-brand-amber uppercase tracking-[0.2em] text-sm mb-4">
              Gallery
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-ivory">
              Product <span className="italic font-light text-brand-gold">Showcase</span>
            </h3>
          </div>
          <Link 
            href="/projects" 
            className="group flex items-center gap-4 text-brand-ivory hover:text-brand-amber transition-colors mt-6 md:mt-0 pb-2 border-b border-brand-charcoal hover:border-brand-amber"
          >
            <span className="font-sans uppercase tracking-widest text-xs">View Full Gallery</span>
            <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              ref={(el) => { projectsRef.current[index] = el; }}
              className={`group block relative overflow-hidden aspect-[4/3] md:aspect-auto md:h-[32rem] rounded-sm ${project.colSpan}`}
            >
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-amber/10 transition-colors duration-700 z-10 mix-blend-overlay" />
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-brand-black/80 backdrop-blur-md border border-brand-charcoal/50 p-6 inline-block self-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 shadow-lg">
                  <p className="font-sans text-brand-amber uppercase tracking-[0.2em] text-[0.6rem] mb-2">
                    {project.category}
                  </p>
                  <h4 className="font-serif text-2xl text-brand-ivory flex items-center gap-4">
                    {project.title}
                    <ArrowUpRight size={20} className="text-brand-gold group-hover:text-brand-amber transition-colors" />
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
