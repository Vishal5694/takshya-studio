"use client";

import Button from "@/components/Button";

export default function Consultation() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-brand-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-black/20 mix-blend-overlay hidden lg:block transform -skew-x-12 translate-x-32" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-amber/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-sans text-brand-amber uppercase tracking-[0.2em] text-sm mb-4">
              Begin Your Journey
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-ivory mb-8">
              Book a <span className="italic font-light text-brand-gold">Consultation</span>
            </h3>
            <p className="font-sans text-brand-ivory/60 font-light text-lg mb-12 max-w-md">
              Share your vision with us. Our expert lighting consultants are ready to discuss your space and how TAKSHYA STUDIO can illuminate it.
            </p>
            
            <div className="space-y-6 text-brand-ivory/80 font-sans font-light">
              <p>
                <strong className="text-brand-amber font-normal tracking-widest uppercase text-xs mr-4">Email</strong>
                <a href="mailto:inquiries@takshyastudio.com" className="hover:text-brand-ivory transition-colors">inquiries@takshyastudio.com</a>
              </p>
              <p>
                <strong className="text-brand-amber font-normal tracking-widest uppercase text-xs mr-4">Phone</strong>
                <a href="tel:+1234567890" className="hover:text-brand-ivory transition-colors">+1 (234) 567-890</a>
              </p>
            </div>
          </div>

          <div className="bg-brand-black p-8 md:p-12 border border-brand-charcoal relative">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-brand-amber/5 opacity-50 pointer-events-none" />
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-brand-amber uppercase tracking-widest text-xs mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory focus:outline-none focus:border-brand-amber transition-colors font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block font-sans text-brand-amber uppercase tracking-widest text-xs mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory focus:outline-none focus:border-brand-amber transition-colors font-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-sans text-brand-amber uppercase tracking-widest text-xs mb-2">Space Type</label>
                <select className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory focus:outline-none focus:border-brand-amber transition-colors font-light appearance-none rounded-none">
                  <option value="" className="bg-brand-black text-brand-ivory">Select space type...</option>
                  <option value="residential" className="bg-brand-black text-brand-ivory">Residential Villa / Home</option>
                  <option value="commercial" className="bg-brand-black text-brand-ivory">Boutique Hotel / Hospitality</option>
                  <option value="restaurant" className="bg-brand-black text-brand-ivory">High-end Café / Restaurant</option>
                  <option value="office" className="bg-brand-black text-brand-ivory">Executive Office</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-brand-amber uppercase tracking-widest text-xs mb-2">Lighting Requirement</label>
                <select className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory focus:outline-none focus:border-brand-amber transition-colors font-light appearance-none rounded-none">
                  <option value="" className="bg-brand-black text-brand-ivory">Select requirement...</option>
                  <option value="single" className="bg-brand-black text-brand-ivory">Single Sculptural Piece</option>
                  <option value="collection" className="bg-brand-black text-brand-ivory">Full Room Collection</option>
                  <option value="bespoke" className="bg-brand-black text-brand-ivory">Bespoke Installation</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-brand-amber uppercase tracking-widest text-xs mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-brand-charcoal py-3 text-brand-ivory focus:outline-none focus:border-brand-amber transition-colors font-light resize-none"
                  placeholder="Tell us about the atmosphere you wish to create..."
                />
              </div>

              <div className="pt-4">
                <Button type="button" variant="primary" className="w-full">
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
