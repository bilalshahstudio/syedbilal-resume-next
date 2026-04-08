"use client";

import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import LogoLoop from "../../ui components/LogoLoopMarquee/LogoLoopMarquee";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const points = [
    "5+ Years Of Experience",
    "Professional Web Designer",
    "Mobile Apps Design",
    "Custom Design Support",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    // send to API or show success UI here
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start mb-10">
        {/* Left side */}
        <div>
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          <h3 className="text-xl font-semibold mt-4 text-highlight">
            Let’s Talk For Your Next Projects
          </h3>
          <p className="text-description mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-description"
              >
                <Check className="text-highlight w-5 h-5" /> {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side (Form) */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm text-description mb-1"
              >
                Full Name
              </label>
              <input
                id="fullName"
                {...register("fullName", {
                  required: "This field is required",
                })}
                aria-invalid={errors.fullName ? "true" : "false"}
                className="w-full p-3 rounded-lg bg-[#1F1F1F] border border-transparent text-white focus:outline-none focus:border-[#C9F31D] transition"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-description mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "This field is required" })}
                aria-invalid={errors.email ? "true" : "false"}
                className="w-full p-3 rounded-lg bg-[#1F1F1F] border border-transparent text-white focus:outline-none focus:border-[#C9F31D] transition"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-description mb-1"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone", { required: "This field is required" })}
                aria-invalid={errors.phone ? "true" : "false"}
                className="w-full p-3 rounded-lg bg-[#1F1F1F] border border-transparent text-white focus:outline-none focus:border-[#C9F31D] transition"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm text-description mb-1"
              >
                Subject
              </label>
              <input
                id="subject"
                {...register("subject", { required: "This field is required" })}
                aria-invalid={errors.subject ? "true" : "false"}
                className="w-full p-3 rounded-lg bg-[#1F1F1F] border border-transparent text-white focus:outline-none focus:border-[#C9F31D] transition"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-description mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message", { required: "This field is required" })}
                aria-invalid={errors.message ? "true" : "false"}
                className="w-full p-3 rounded-lg bg-[#1F1F1F] border border-transparent text-white focus:outline-none focus:border-[#C9F31D] transition"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className=" py-3 px-3 rounded-lg bg-[#C9F31D] text-black font-semibold hover:bg-[#1F1F1F] hover:text-white transition cursor-target"
            >
              Send Us Message
            </button>
          </form>
        </div>
      </div>
      <div
      // style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0B0B0B"
          // ariaLabel="Technology partners"
          ariaLabel="Experties"
        />
      </div>
    </section>
  );
}
