interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="pt-48 pb-24 px-6 lg:px-8 bg-brand-black text-center border-b border-brand-charcoal">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-brand-ivory mb-6">
          {title}
        </h1>
        <p className="font-sans text-brand-ivory/60 font-light text-lg uppercase tracking-widest">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
