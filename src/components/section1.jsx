import img from "../assets/cyberpunk-man.png";
import { SiYoutubegaming } from "react-icons/si";
import { BsTwitch } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { SiFacebookgaming } from "react-icons/si";
import { FaRedditAlien } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import SideBanner from "./sideBanner";

export default function Section1() {
  return (
    <section id="home">
      <div className="absolute h-360 w-360 rounded-full bg-pink-400 blur-3xl top-5 right-16 origin-bottom opacity-1 scale-100"></div>
      <SideBanner text="home" />
      <div className="fixed right-[5%] h-[100vh] w-[50vw] bottom-0 bg-cover bg-center fldex justify-center items-center">
        <Image className="absolute h-full w-[140%] right-0" src={img}></Image>
      </div>
      <div className="absolute left-[10%] top-[20%] max-w-[40%]">
        <h1 className="text-blue-300 text-7xl font-roboto">Join the</h1>
        <h2 className="relative text-pink-400 uppercase text-8xl font-extrabold font-varela">
          community
        </h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          voluptatum quasi aut officiis est tenetur iste fugit ex accusamus
          quod.
        </span>
        <Link
          className="relative h-16 w-52 border-2 border-cyan-200 rounded-full flex justify-center items-center no-underline mt-14 capitalize text-20 font-bold text-cyan-300 cursor-pointer"
          href="#community"
        >
          explore
        </Link>
      </div>
      <div className="fixed bottom-[5%] right-[2%] flex flex-col justify-center items-center z-10">
        <div className="absolute h-32 w-1 bg-slate-600 translate-y-[-154%] "></div>
        <SiYoutubegaming className="relative my-3 text-white transform scale-150 cursor-pointer" />
        <BsTwitch className="relative my-3 text-white transform scale-150 cursor-pointer" />
        <FaDiscord className="relative my-3 text-white transform scale-150 cursor-pointer" />
        <SiFacebookgaming className="relative my-3 text-white transform scale-150 cursor-pointer" />
        <FaRedditAlien className="relative my-3 text-white transform scale-150 cursor-pointer" />
      </div>
    </section>
  );
}
