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
import MyProjects from "./components/pages/MyProjects/MyProjects";
import ScrollFloat from "./components/ui components/ScrollFloat/ScrollFloat";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(true);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <IntroScreen key="intro" onFinish={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
      {!showIntro && (
        // <ScrollFloat
        //   animationDuration={1}
        //   ease="back.inOut(2)"
        //   scrollStart="top bottom"
        //   scrollEnd="bottom top"
        //   stagger={0.03}
        // >
        <main className="main-page-container ">
          {/* <TargetCursor spinDuration={2} hideDefaultCursor={true} /> */}
          {/* <Header /> */}
          <div className="flex justify-center mt-7">
            <GooeyNav
              items={items.map((item) => ({
                ...item,
                onClick: () => handleScroll(item.href),
              }))}
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
          <MyProjects />
          <Skills />
          <Contact />
        </main>
        // </ScrollFloat>
      )}
    </>
  );
}
