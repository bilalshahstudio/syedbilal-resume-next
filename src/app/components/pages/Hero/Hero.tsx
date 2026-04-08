"use client";
import Image from "next/image";
import React from "react";
import CountUp from "../../ui components/CountNumber/CountNumber";
import ScrollFloat from "../../ui components/ScrollFloat/ScrollFloat";

export default function Hero() {
  return (
    <section
      id="home"
      className="inline-flex justify-between gap-6 items-center py-20 px-16"
    >
      {/* Left: Intro */}
      <div className="space-y-4">
        <h1 className="text-2xl md:text-5xl font-bold text-opacity-5 text-gray-200">
          Hello, I’m
        </h1>
        <h2 className="text-4xl md:text-7xl font-semibold text-highlight">
          {/* <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          > */}
          Syed Bilal
          {/* </ScrollFloat> */}
        </h2>
        <h2 className="text-4xl md:text-7xl font-semibold text-primary-foreground whitespace-nowrap">
          Software Engineer,
        </h2>
        <h2 className="text-4xl md:text-7xl font-semibold text-primary-foreground whitespace-nowrap">
          MERN Stack
        </h2>
        <p className="text-description">
          We denounce with righteous indignation dislike demoralized by the
          charms of pleasure
        </p>
        <div className="flex space-x-4">
          <button
            className="bg-highlight text-black px-6 py-2 rounded-lg font-semibold cursor-pointer cursor-target whitespace-nowrap"
            onClick={() =>
              (window.location.href =
                "mailto:bilalshahstudio@gmail.com?subject=Offer of Appointment")
            }
          >
            Hire Me
          </button>
          <a href="/bilal-resume.pdf" download="bilal-resume.pdf">
            <button className="border border-highlight text-highlight px-6 py-2 rounded-lg font-semibold cursor-pointer cursor-target whitespace-nowrap">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      {/* Middle: Image */}
      <div className="flex justify-center -z-10">
        <Image
          src="/astronaut.gif"
          alt="profile-picture"
          width={800}
          height={800}
          unoptimized
          className="rounded-2xl object-cover shadow-lg"
        />
      </div>

      {/* Right: Stats Card */}
      <div className="bg-bg-black text-secondary rounded-2xl p-6 shadow-lg space-y-4">
        <div>
          <span className="count-up-text text-3xl font-bold text-highlight">
            <CountUp
              from={0}
              to={1.5}
              duration={1}
              onStart={undefined}
              onEnd={undefined}
            />
            +
          </span>
          <p className="text-description">Years Experience</p>
        </div>
        <div>
          {/* <h3 className="text-3xl font-bold text-highlight">50+</h3> */}
          <span className="count-up-text text-3xl font-bold text-highlight">
            <CountUp
              from={0}
              to={10}
              duration={1}
              onStart={undefined}
              onEnd={undefined}
            />
            +
          </span>
          <p className="text-description">Projects Completed</p>
        </div>
        <div>
          {/* <h3 className="text-3xl font-bold text-highlight">95%</h3> */}
          <span className="count-up-text text-3xl font-bold text-highlight">
            <CountUp
              from={0}
              to={95}
              duration={1}
              onStart={undefined}
              onEnd={undefined}
            />
            %
          </span>
          <p className="text-description">Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
}
