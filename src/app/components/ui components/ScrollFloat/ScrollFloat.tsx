"use client";
import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./scrollFloat.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ScrollFloatProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "layoutContainer",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    if (typeof children === "string") {
      return children.split("").map((char, index) => (
        <span className="char" key={index}>
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    }
    return null;
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    if (splitText) {
      const charElements = el.querySelectorAll(".char");

      gsap.fromTo(
        charElements,
        {
          willChange: "opacity, transform",
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: "50% 0%",
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
          },
        },
      );
    } else {
      // For non-string children, apply animation to the container or child elements
      gsap.fromTo(
        el,
        {
          willChange: "opacity, transform",
          opacity: 0,
          yPercent: 120,
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          yPercent: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
          },
        },
      );
    }
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
    splitText,
  ]);

  return (
    <div ref={containerRef} className={`scroll-float ${containerClassName}`}>
      {splitText ? (
        <span className={`scroll-float-text ${textClassName}`}>
          {splitText}
        </span>
      ) : (
        children
      )}
    </div>
  );
};

export default ScrollFloat;
