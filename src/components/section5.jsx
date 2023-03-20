import { SiYoutubegaming } from "react-icons/si";
import { BsTwitch } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { SiFacebookgaming } from "react-icons/si";
import { FaRedditAlien } from "react-icons/fa";

import { BsChevronDoubleUp } from "react-icons/bs";

import Link from "next/link";

export default function Section5() {
  return (
    <section className="bg-blue-900 z-10 flex flex-col gap-12" id="contact">
      <div className="absolute h-96 rounded-full bg-cyan-300 blur-md top-[5%] left-[10%]"></div>
      <h1 className="text-white text-7xl font-extrabold font-varela">
        Get in Touch
      </h1>

      <div className="socials">
        <SiYoutubegaming className="icon" style={{ "--i": 1 }} />
        <BsTwitch className="icon" style={{ "--i": 2 }} />
        <FaDiscord className="icon" style={{ "--i": 3 }} />
        <SiFacebookgaming className="icon" style={{ "--i": 4 }} />
        <FaRedditAlien className="icon" style={{ "--i": 5 }} />
      </div>

      <div className="to-top">
        <Link href="#home">
          Home <BsChevronDoubleUp />
        </Link>
      </div>
    </section>
  );
}
