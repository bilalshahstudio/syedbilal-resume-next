"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register plugin
gsap.registerPlugin(ScrollTrigger);

export default function MyProjects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollRef.current;

    if (!section || !scrollContainer) return;

    const totalWidth = scrollContainer.scrollWidth;
    const viewportWidth = window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(scrollContainer, {
        x: -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="w-full py-6 md:py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Headings */}``
      <div className="max-w-7xl mx-auto mb-12">
        <h4 className="text-center text-sm text-highlight mb-2">
          Latest Works
        </h4>

        <h2 className="text-center text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Explore My Popular Projects
        </h2>

        <p className="text-left text-description max-w-2xl">
          Some things I&apos;ve built with love, expertise and a pinch of
          magical ingredients.
        </p>
      </div>
      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div ref={scrollRef} className="flex gap-6 w-max">
          {/* Replace this with your Card Component */}
          {[
            "Hotel Management",
            "Finance Tracker App",
            "Restaurant Booking System",
            "Crypto News",
            "AI Services",
            6,
          ].map((item) => (
            <div
              key={item}
              className="md:min-w-[684px] min-w-[360px] h-[450px] bg-bg-black rounded-2xl flex items-center justify-center text-white shadow-lg"
            >
              Project Card {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
