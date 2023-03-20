import { useState } from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <>
      <div className="fixed h-16 w-16 bg-blue-500 top-[3%] right-[3%] rounded-2xl flex justify-center items-center z-10 cursor-pointer translate-x-12 opacity-1">
        <BiMenuAltRight
          className="absolute duration-300 ease-in hidden"
          onClick={() => setIsNavOpen(true)}
        />
        <AiOutlineClose
          className={"absolute duration-300 ease-in"}
          onClick={() => setIsNavOpen(false)}
        />
      </div>
      <div className="fixed top-[3%] right-[calc(3%+64px+3%)] overflow-hidden z-10 pointer-events-none select-none">
        <ul className="relative flex list-none bg-slate-400 h-16 rounded-2xl justify-center items-center p-6 ">
          <Link
            className="relative flex justify-center items-center mx-3 py-2 capitalize cursor-pointer"
            href="#home"
          >
            home
          </Link>
          <Link
            className="relative flex justify-center items-center mx-3 py-2 capitalize cursor-pointer"
            href="#community"
          >
            community
          </Link>
          <Link
            className="relative flex justify-center items-center mx-3 py-2 capitalize cursor-pointer"
            href="#games"
          >
            games
          </Link>
          <Link
            className="relative flex justify-center items-center mx-3 py-2 capitalize cursor-pointer"
            href="#streams"
          >
            streams
          </Link>
          <Link
            className="relative flex justify-center items-center mx-3 py-2 capitalize cursor-pointer"
            href="#socials"
          >
            socials
          </Link>
        </ul>
      </div>
    </>
  );
}
