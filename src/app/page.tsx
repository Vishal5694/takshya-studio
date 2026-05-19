import Hero from "@/components/home/Hero";
import AboutBrand from "@/components/home/AboutBrand";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Gallery from "@/components/home/ProjectShowcase";
import Atmosphere from "@/components/home/Atmosphere";
import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";
import Consultation from "@/components/home/Consultation";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBrand />
      <FeaturedCollections />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <Atmosphere />
      <Testimonials />
      <Stats />
      <Consultation />
    </>
  );
}
