import img1 from "../assets/cyberpunk-art--girl.jpg";
import img2 from "../assets/faa15c324a7c.jpg";
import img3 from "../assets/wallpapersden.jpg";
import { BsChevronDoubleRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import SideBanner from "./sideBanner";

export default function Section2() {
  return (
    <section
      className="mt-[20vh] flex justify-start items-center "
      id="community"
    >
      <div className="absolute h-[360px] w-[360px] rounded-full bg-cyan-300 blur-3xl top-[5%] right-[12%] z-[-1]"></div>
      <div className="absolute flex flex-col justify-center items-center left-0 w-2/3 gap-7 ">
        <SideBanner text="Community" />

        <div className="relative flex my-auto mx-40" style={{ "--k": 1 }}>
          <Image
            className="h-[150px] min-w-[150px] rounded-3xl saturate-150"
            src={img1}
            alt=""
          />
          <p className="inline-block text-cyan-200 text-xl ml-6 font-varela ">
            Call of Duty <br />
            <i className="text-white text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              provident obcaecati quam quisquam placeat officia laborum alias
              pariatur voluptate nostrum.
            </i>
          </p>
        </div>

        <div className="relative flex my-auto mx-40" style={{ "--k": 2 }}>
          <Image
            className="h-[150px] min-w-[150px] rounded-3xl saturate-150"
            src={img2}
            alt=""
          />
          <p className="inline-block text-cyan-200 text-xl ml-6 font-varela ">
            Garena Free Fire <br />
            <i className="text-white text-sm">
              Voluptatum asperiores id atque consequuntur temporibus! Autem
              delectus quo maxime natus impedit placeat deleniti veniam
              mollitia.
            </i>
          </p>
        </div>

        <div className="relative flex my-auto mx-40" style={{ "--k": 3 }}>
          <Image
            className="h-[150px] min-w-[150px] rounded-3xl saturate-150"
            src={img3}
            alt=""
          />
          <p className="inline-block text-cyan-200 text-xl ml-6 font-varela ">
            Player Unknown's Battlegrounds- PUBG
            <br />
            <i className="text-white text-sm">
              Fugit quidem, similique odit, dolorum error deleniti voluptatem
              libero ducimus eum cupiditate neque beatae fugiat iste consequatur
              itaque hic modi eaque nesciunt!
            </i>
          </p>
        </div>

        <div className="relative flex self-end justify-center items-center cursor-pointer mr-[100px]">
          <span className="text-cyan-200">View more</span>
          <BsChevronDoubleRight className="text-cyan-200 scale-125 ml-3" />
        </div>
      </div>
    </section>
  );
}
