"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Hammer, Gem, Lightbulb, Leaf, Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Hammer className="w-6 h-6 text-brand-amber" strokeWidth={1} />,
    title: "Handcrafted Excellence",
    description: "Every lighting fixture is meticulously sculpted by master artisans using traditional techniques.",
  },
  {
    icon: <Gem className="w-6 h-6 text-brand-amber" strokeWidth={1} />,
    title: "Natural Premium Wood",
    description: "We source only the finest, sustainably harvested woods with striking natural grains and textures.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-brand-amber" strokeWidth={1} />,
    title: "Ambient Luxury",
    description: "Advanced lighting integration designed to create a warm, cinematic atmosphere in any space.",
  },
  {
    icon: <Eye className="w-6 h-6 text-brand-amber" strokeWidth={1} />,
    title: "Architectural Vision",
    description: "Sculptural designs that serve as stunning focal points whether illuminated or turned off.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-brand-amber" strokeWidth={1} />,
    title: "Sustainable Craft",
    description: "Eco-conscious processes ensuring minimal waste while celebrating organic imperfections.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-brand-amber" strokeWidth={1} />,
    title: "Bespoke Customization",
    description: "Tailored dimensions, finishes, and color temperatures to match your specific interior design.",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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
    <section ref={containerRef} className="py-32 px-6 lg:px-8 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-sans text-brand-amber uppercase tracking-[0.2em] text-sm mb-4">
            The Takshya Standard
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-brand-ivory">
            Why <span className="italic font-light text-brand-gold">Choose Us</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full border border-brand-charcoal flex items-center justify-center mb-6 group-hover:border-brand-amber group-hover:shadow-[0_0_15px_rgba(200,155,109,0.3)] transition-all duration-500">
                {feature.icon}
              </div>
              <h4 className="font-serif text-xl text-brand-ivory mb-3 group-hover:text-brand-amber transition-colors">
                {feature.title}
              </h4>
              <p className="font-sans text-brand-ivory/60 font-light text-sm leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
