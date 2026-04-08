import React from "react";
import Image from "next/image";
import { CheckCircle, Mail, Phone } from "lucide-react";

export default function About(): React.JSX.Element {
  const skills = [
    "Branding & Design",
    "Digital Marketing",
    "Web Development",
    "Product Design",
  ];

  return (
    <section
      id="about"
      className=" grid md:grid-cols-2 gap-12 py-20 px-20 items-center bg-bg-black"
    >
      {/* Left: Textual Content */}
      <div className="space-y-6">
        {/* Title + Subtitle */}
        <div>
          <h2 className="text-highlight text-lg font-semibold uppercase tracking-wide">
            About Me
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-primary-foreground mt-2">
            Professional{" "}
            <span className="text-highlight">Problem Solutions</span> For
            Digital Products
          </h3>
        </div>

        {/* Description */}
        <p className="text-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        {/* Skills List */}
        <ul className="grid grid-cols-2 gap-3">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center space-x-2">
              <CheckCircle size={18} className="text-highlight" />
              <span className="text-primary-foreground">{skill}</span>
            </li>
          ))}
        </ul>

        {/* Contact Slim Card */}
        <div className="bg-bg-card text-secondary rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center space-x-3">
            <Mail className="text-highlight" size={20} />
            <div>
              <p className="text-sm font-medium text-card-title-text">
                Email Us
              </p>
              <p className="text-description">bilalshahstudio@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-highlight" size={20} />
            <div>
              <p className="text-sm font-medium text-card-title-text">
                Make a Call
              </p>
              <p className="text-description">+92 301 7496764</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center">
        <Image
          src="/profile.jpg"
          alt="profile-picture"
          width={450}
          height={450}
          className="rounded-2xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
