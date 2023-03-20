import React from "react";

type Props = {
  text: String;
};

export default function SideBanner({ text }: Props) {
  return (
    <h3 className="absolute flex justify-center items-center left-[1%] text-2xl text-cyan-100 rotate-90 font-varela">
      <div className="absolute h-1 w-32 bg-cyan-100 translate-x-[110%]"></div>
      {text}
      <div className="absolute h-1 w-32 bg-cyan-100 translate-x-[-110%]"></div>
    </h3>
  );
}
