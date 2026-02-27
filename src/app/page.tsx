import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import FeaturedWork from "@/components/home/FeaturedWork";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "XNDR Technology — Websites That Look Expensive, Built Fast",
  description:
    "We build clean, high-converting websites for small businesses. Mobile-first, SEO-ready, fast turnaround. Book a free call today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <FeaturedWork />
      <Testimonials />
      <FAQ />
      <HomeCTA />
    </>
  );
}
