"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Takshya Studio's lighting pieces completely redefined our boutique hotel lobby. The warm, architectural glow they provide is simply mesmerizing.",
    author: "Elena R.",
    role: "Lead Interior Designer",
  },
  {
    quote: "The bespoke live edge pendant they created is the soul of our dining room. A true sculptural masterpiece that elevates the entire space.",
    author: "Marcus T.",
    role: "Luxury Villa Owner",
  },
  {
    quote: "Collaborating with Takshya on architectural lighting was seamless. Their understanding of light, shadow, and wood grain is unparalleled.",
    author: "Sarah J.",
    role: "Principal Architect",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 lg:px-8 bg-brand-charcoal border-t border-brand-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-sans text-brand-amber uppercase tracking-[0.2em] text-sm mb-4">
            Client Perspectives
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-brand-ivory">
            Words of <span className="italic font-light text-brand-gold">Appreciation</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-brand-black p-10 border border-brand-charcoal hover:border-brand-amber/50 hover:shadow-[0_0_30px_rgba(200,155,109,0.05)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-brand-amber/40 mb-6" />
                <p className="font-sans text-brand-ivory/80 font-light leading-relaxed mb-10 text-sm md:text-base">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div>
                <div className="w-12 h-[1px] bg-brand-amber mb-4" />
                <p className="font-serif text-brand-ivory text-lg">{testimonial.author}</p>
                <p className="font-sans text-brand-gold text-xs uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
