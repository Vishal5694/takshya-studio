"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutBrand() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Reveal
      gsap.fromTo(
        ".about-text-reveal",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );

      // Image Parallax
      gsap.fromTo(
        ".about-img-inner",
        { scale: 1.2, y: "-10%" },
        {
          scale: 1,
          y: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8 bg-brand-black w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content */}
          <div ref={textRef} className="order-2 lg:order-1">
            <h2 className="about-text-reveal font-sans text-brand-amber uppercase tracking-[0.2em] text-sm mb-6">
              Our Philosophy
            </h2>
            <h3 className="about-text-reveal font-serif text-4xl md:text-5xl text-brand-ivory leading-tight mb-8">
              Wood Transformed <br />
              <span className="italic font-light text-brand-gold">Into Illuminated Art</span>
            </h3>
            <div className="about-text-reveal space-y-6 text-brand-ivory/70 font-light text-lg">
              <p>
                At TAKSHYA STUDIO, we believe that true luxury lies in the warmth of the atmosphere. 
                Every sculptural lighting piece begins with sustainably sourced wood, its natural 
                imperfections and grain meticulously shaped by master artisans.
              </p>
              <p>
                Our designs are not just fixtures; they are emotional architectural statements 
                that breathe life into a space. We blend traditional woodworking techniques 
                with modern illumination technology to create ambient masterpieces that 
                evoke warmth and stand the test of time.
              </p>
            </div>
            
            <div className="about-text-reveal mt-12 grid grid-cols-2 gap-8">
              <div className="border-l border-brand-charcoal pl-6">
                <p className="font-serif text-3xl text-brand-gold mb-2">Organic</p>
                <p className="font-sans text-xs uppercase tracking-widest text-brand-ivory/50">Luxury</p>
              </div>
              <div className="border-l border-brand-charcoal pl-6">
                <p className="font-serif text-3xl text-brand-gold mb-2">Artisan</p>
                <p className="font-sans text-xs uppercase tracking-widest text-brand-ivory/50">Precision</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative" ref={imageRef}>
             {/* Glow behind image */}
            <div className="absolute inset-0 bg-brand-amber/20 blur-[100px] rounded-full scale-75 opacity-60 mix-blend-screen pointer-events-none" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-brand-charcoal/50">
              <div className="absolute inset-0 bg-brand-charcoal/20 z-10 mix-blend-overlay" />
              <img
                src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2574&auto=format&fit=crop"
                alt="Illuminated sculptural wood detail"
                className="about-img-inner absolute inset-0 w-full h-[120%] object-cover object-center"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
