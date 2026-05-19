import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-charcoal pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl tracking-widest text-brand-ivory uppercase mb-4">
              Takshya
            </h2>
            <p className="text-brand-amber font-sans text-sm tracking-widest uppercase mb-6">
              Luxury Crafted Into Light
            </p>
            <p className="text-brand-ivory/60 font-light max-w-sm leading-relaxed">
              Where wood becomes illuminated art. Handcrafted sculptural lighting designed to create atmospheric warmth and timeless elegance.
            </p>
          </div>
          
          <div>
            <h3 className="font-sans text-sm tracking-widest text-brand-amber uppercase mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link href="/collections" className="text-brand-ivory/70 hover:text-brand-amber transition-colors font-light">Collections</Link></li>
              <li><Link href="/projects" className="text-brand-ivory/70 hover:text-brand-amber transition-colors font-light">Gallery</Link></li>
              <li><Link href="/bespoke" className="text-brand-ivory/70 hover:text-brand-amber transition-colors font-light">Bespoke Lighting</Link></li>
              <li><Link href="/about" className="text-brand-ivory/70 hover:text-brand-amber transition-colors font-light">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm tracking-widest text-brand-amber uppercase mb-6">Connect</h3>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-brand-ivory/70 hover:text-brand-amber transition-colors font-light">Contact Us</Link></li>
              <li><a href="#" className="text-brand-ivory/70 hover:text-brand-amber transition-colors font-light">Instagram</a></li>
              <li><a href="#" className="text-brand-ivory/70 hover:text-brand-amber transition-colors font-light">Pinterest</a></li>
              <li><a href="#" className="text-brand-ivory/70 hover:text-brand-amber transition-colors font-light">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-charcoal flex flex-col md:flex-row items-center justify-between">
          <p className="text-brand-ivory/40 text-sm font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TAKSHYA STUDIO. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-brand-ivory/40 hover:text-brand-ivory/80 text-sm font-light transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-brand-ivory/40 hover:text-brand-ivory/80 text-sm font-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
