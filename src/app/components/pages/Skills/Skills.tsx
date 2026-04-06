import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "Figma", img: "/skills/skill1.webp", level: "95%" },
    { name: "Framer", img: "/skills/skill2.webp", level: "90%" },
    { name: "Photoshop", img: "/skills/skill3.webp", level: "85%" },
    { name: "WordPress", img: "/skills/skill4.webp", level: "80%" },
    { name: "Angular", img: "/skills/skill5.webp", level: "75%" },
    { name: "Webflow", img: "/skills/skill6.webp", level: "88%" },
    { name: "Python", img: "/skills/skill7.webp", level: "70%" },
    { name: "Sketch", img: "/skills/skill8.webp", level: "78%" },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div>
          <h2 className="text-3xl font-bold text-white">My Skills</h2>
          <h3 className="text-xl font-semibold mt-4 text-highlight">
            Let’s Explore Popular Skills & Experience
          </h3>
          <p className="text-description mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>
          <button className="mt-6 flex items-center gap-2 px-5 py-3 rounded-xl bg-highlight text-black font-semibold hover:opacity-90 transition cursor-target">
            Learn More <ArrowRight size={18} />
          </button>
        </div>

        {/* Right side */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group bg-[#1F1F1F] border border-[#b1b1b1] hover:border-[#C9F31D] rounded-xl flex flex-col items-center p-4 transition"
            >
              <Image
                src={skill.img}
                alt={skill.name}
                width={50}
                height={50}
                className="mb-3"
              />
              <p className="text-sm text-white font-medium">{skill.name}</p>
              <span className="mt-2 px-3 py-1 rounded-lg text-xs bg-[#131313] text-[#b9b9b9] transition-colors duration-300 group-hover:bg-[#C9F31D] group-hover:text-black">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
