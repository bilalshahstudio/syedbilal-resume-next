import Image from "next/image";
import React from "react";

interface TailwindCardProps {
  item: {
    title: string;
    imgSrc: string;
    projectURL?: string;
  };
}

const TailwindCard: React.FC<TailwindCardProps> = (props) => {
  return (
    <a
      href={props.item.projectURL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative cursor-pointer md:min-w-[684px] min-w-[360px] h-[350px] isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8  max-w-sm mx-auto mt-4"
    >
      <h3 className="z-10 mt-3 text-3xl font-bold text-highlight absolute top-1.5">
        {props.item.title}
      </h3>
      <img
        src={props.item.imgSrc}
        alt="restaurant"
        className="absolute inset-0 h-full w-full object-cover blur-xs"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        View Project
      </div>
    </a>
  );
};

export default TailwindCard;
