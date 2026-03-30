"use client";

import { Menu } from "lucide-react";
import React from "react";

const navItems: string[] = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Blog",
  "Contact",
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg-primary shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo */}
        <div className="font-bold text-xl">Bilal Shah</div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <div key={item} className="group relative">
              <button className="text-description hover:text-highlight">
                {item}
              </button>
              {/* Dropdown placeholder */}
              <div className="absolute left-0 hidden group-hover:block bg-bg-secondary text-secondary rounded-md p-2">
                <p className="text-sm">Dropdown Item</p>
              </div>
            </div>
          ))}
        </nav>

        {/* Right: CTA + Menu */}
        <div className="flex items-center space-x-4">
          <button className="bg-highlight text-secondary px-4 py-2 rounded-lg font-semibold">
            Let’s Talk
          </button>
          <button className="bg-highlight p-2 rounded-lg">
            <Menu className="text-[#070707]" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
