"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Wood Selection",
    desc: "We handpick sustainably sourced timber, selecting pieces with compelling organic characteristics and natural live edges.",
  },
  {
    num: "02",
    title: "Sculpting & Shaping",
    desc: "Master artisans carve and shape the wood, respecting its natural form while crafting an elegant architectural silhouette.",
  },
  {
    num: "03",
    title: "Surface Finishing",
    desc: "Meticulous sanding and the application of natural oils enhance the grain, creating a rich, tactile surface.",
  },
  {
    num: "04",
    title: "Lighting Integration",
    desc: "Premium LED technology is seamlessly embedded into the wood, ensuring a soft, diffused, and cinematic glow.",
  },
  {
    num: "05",
    title: "Hand Assembly",
    desc: "Every component is carefully assembled by hand, ensuring flawless joinery and structural integrity.",
  },
  {
    num: "06",
    title: "Final Illumination",
    desc: "Rigorous testing of light temperature, spread, and ambiance to guarantee the perfect atmospheric luxury.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        
        gsap.fromTo(
          step,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
            },
          }
        );
      });

      gsap.fromTo(
        ".process-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
      
      gsap.to(".process-glow", {
        boxShadow: "0 0 20px rgba(200,155,109,0.8)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 lg:px-8 bg-brand-charcoal overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-sans text-brand-amber uppercase tracking-[0.2em] text-sm mb-4">
            The Crafting Journey
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-brand-ivory">
            From Nature <span className="italic font-light text-brand-gold">To Light</span>
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-brand-black transform md:-translate-x-1/2 origin-top process-line" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.num}
                ref={(el) => { stepsRef.current[index] = el; }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Number Indicator */}
                <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-brand-charcoal border border-brand-amber flex items-center justify-center z-10 font-serif text-brand-amber ${index === steps.length - 1 ? 'process-glow' : ''}`}>
                  {step.num}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
                  <h4 className="font-serif text-2xl text-brand-ivory mb-4">{step.title}</h4>
                  <p className="font-sans text-brand-ivory/60 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
