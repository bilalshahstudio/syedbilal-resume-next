import React from "react";

interface TailwindCardProps {
  // define props here
  item: {
    title: string;
  };
}

const TailwindCard: React.FC<TailwindCardProps> = (props) => {
  return (
    <a className="relative cursor-pointer md:min-w-[684px] min-w-[360px] h-[350px] isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8  max-w-sm mx-auto mt-4">
      <h3 className="z-10 mt-3 text-3xl font-bold text-white absolute top-1.5">
        {props.item.title}
      </h3>
      <img
        src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
        alt="University of Southern California"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        City of love
      </div>
    </a>
  );
};

export default TailwindCard;
