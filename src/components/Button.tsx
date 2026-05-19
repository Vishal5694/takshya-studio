import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  className?: string;
}

export default function Button({ children, variant = "primary", href, className, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-500 ease-out font-sans tracking-widest text-sm uppercase relative overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-gold text-brand-black px-8 py-4 hover:bg-brand-ivory",
    secondary: "bg-brand-charcoal text-brand-ivory px-8 py-4 hover:bg-brand-black border border-brand-charcoal hover:border-brand-gold",
    outline: "bg-transparent text-brand-ivory px-8 py-4 border border-brand-gold hover:bg-brand-gold hover:text-brand-black",
    ghost: "bg-transparent text-brand-gold hover:text-brand-ivory px-0 py-2",
  };

  const Component = href ? Link : "button";
  
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant !== "ghost" && (
        <div className="absolute inset-0 h-full w-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {content}
    </button>
  );
}
