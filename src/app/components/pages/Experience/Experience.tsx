import { Asterisk, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      date: "2021 - Present",
      title: "Lead Developer",
      company: "Google",
    },
    {
      date: "2019 - 2021",
      title: "Senior Developer",
      company: "Microsoft",
    },
    {
      date: "2017 - 2019",
      title: "Frontend Engineer",
      company: "Facebook",
    },
    {
      date: "2015 - 2017",
      title: "Junior Developer",
      company: "Startup Inc.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full bg-bg-card">
          <Asterisk size={80} className="text-highlight" />
        </div>

        {/* Right - Experience Card */}
        <div className="bg-bg-card text-black rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-card-title-text">
            My Resume
          </h2>
          <h2 className="text-2xl font-bold mb-6 text-primary-foreground">
            Real <span className="text-highlight">Problem Solutions</span>{" "}
            Experience
          </h2>
          <div className="grid grid-cols-2 divide-x divide-gray-300">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 ${
                  index < 2 ? "border-b border-gray-300" : ""
                }`}
              >
                <ExternalLink className="text-highlight mt-1" size={20} />
                <div>
                  <p className="text-sm text-card-title-text">{exp.date}</p>
                  <h3 className="text-lg font-semibold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-700 text-white-op35">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
