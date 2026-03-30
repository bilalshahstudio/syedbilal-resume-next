import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description: "Building responsive and scalable web applications.",
    },
    {
      number: "02",
      title: "Branding & Design",
      description: "Creative designs that build strong brand identity.",
    },
    {
      number: "03",
      title: "Digital Marketing",
      description: "SEO, social media, and marketing strategies.",
    },
    {
      number: "04",
      title: "Product Design",
      description: "User-centered product and UI/UX design solutions.",
    },
    {
      number: "05",
      title: "Consulting",
      description: "Professional advice for digital transformation.",
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Reliable ongoing technical support services.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-white">
          Popular Services
        </h2>
        <h2 className="text-3xl font-bold mb-10 text-white">
          My <span className="text-highlight">Special Service</span> For your
          Business Development
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1F1F1F] rounded-xl p-6 flex justify-between items-center group"
            >
              {/* Left Content */}
              <div>
                <span className="text-highlight font-bold text-xl">
                  {service.number}
                </span>
                <h3 className="text-white text-lg font-semibold mt-2">
                  {service.title}
                </h3>
                <p className="text-description mt-1 text-sm">
                  {service.description}
                </p>
              </div>

              {/* Right Icon */}
              <div className="cursor-target w-12 h-12 rounded-full border border-[#b1b1b1] bg-[#131313] flex items-center justify-center transition-colors group-hover:bg-highlight group-hover:border-highlight">
                <ArrowUpRight
                  size={20}
                  className="text-white group-hover:text-black"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
