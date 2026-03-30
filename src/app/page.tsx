"use client";
import React, { useState } from "react";
import Header from "./components/pages/Header/Header";
import Hero from "./components/pages/Hero/Hero";
import About from "./components/pages/About/About";
import Experience from "./components/pages/Experience/Experience";
import Services from "./components/pages/Services/Services";
import Skills from "./components/pages/Skills/Skills";
import Contact from "./components/pages/Contact/Contact";
import GooeyNav from "./components/ui components/GooeyNav/GooeyNav";
import TargetCursor from "./components/ui components/CursorTarget/CursorTarget";
import { AnimatePresence } from "framer-motion";
import IntroScreen from "./components/pages/IntroScreen/IntroScreen";

const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <IntroScreen key="intro" onFinish={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
      {!showIntro && (
        <main>
          {/* <TargetCursor spinDuration={2} hideDefaultCursor={true} /> */}
          {/* <Header /> */}
          <div className="flex justify-center mt-7">
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
          <Hero />
          <About />
          <Experience />
          <Services />
          <Skills />
          <Contact />
        </main>
      )}
    </>
  );
}
