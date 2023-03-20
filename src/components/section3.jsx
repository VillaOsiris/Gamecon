import img from "../assets/cyber.png";
import img_sec from "../assets/Diigital_art.jpg";

import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";

import ff from "../assets/freefire.jpg";
import pubg from "../assets/pubg.jpg";
import cod from "../assets/cod-ghost.jpg";
import apex from "../assets/apex.jpg";
import fortnite from "../assets/fortnite.png";

import ff_logo from "../assets/garena-logo.png";
import pubg_logo from "../assets/pubg.png";
import cod_logo from "../assets/cod-logo.png";
import apex_logo from "../assets/apex-legends.png";
import fortnite_logo from "../assets/fortnite-logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Section3() {
  return (
    <section className="section s3" id="games">
      <div className="bg">
        <img src={img} alt="" />
      </div>

      <div className="intro">
        <img src={img_sec} alt="" />
        <h4>
          Explore <b>more</b> Games{" "}
          <BsChevronDoubleRight className="chevron-arrow" />{" "}
        </h4>
      </div>

      <div className="more-games">
        <div className="back">
          <BsChevronDoubleLeft className="chevron-arrow" />
        </div>

        <div className="games-wrapper">
          <div className="game">
            <div className="link ff">
              <div className="logo">
                <img src={ff_logo} alt="" />
              </div>
              <div className="btn">
                Join <BsChevronDoubleRight className="chevron-arrow" />
              </div>
            </div>
            <img src={ff} alt="" />
          </div>

          <div className="game">
            <div className="link pubg">
              <div className="logo">
                <img src={pubg_logo} alt="" />
              </div>
              <div className="btn">
                Join <BsChevronDoubleRight className="chevron-arrow" />
              </div>
            </div>
            <img src={pubg} alt="" />
          </div>

          <div className="game">
            <div className="link cod">
              <div className="logo">
                <img src={cod_logo} alt="" />
              </div>
              <div className="btn">
                Join <BsChevronDoubleRight className="chevron-arrow" />
              </div>
            </div>
            <img src={cod} alt="" />
          </div>

          <div className="game">
            <div className="link apex">
              <div className="logo">
                <img src={apex_logo} alt="" />
              </div>
              <div className="btn">
                Join <BsChevronDoubleRight className="chevron-arrow" />
              </div>
            </div>
            <img src={apex} alt="" />
          </div>

          <div className="game">
            <div className="link fortnite">
              <div className="logo">
                <img src={fortnite_logo} alt="" />
              </div>
              <div className="btn">
                Join <BsChevronDoubleRight className="chevron-arrow" />
              </div>
            </div>
            <img src={fortnite} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
