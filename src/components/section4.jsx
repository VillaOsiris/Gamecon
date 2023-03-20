// import ff_vid from "../assets/ff-vid.mp4";
// import cod_vid from "../assets/cod.mp4";
// import pubg_vid from "../assets/pubg-vid.mp4";
// import fortnite_vid from "../assets/fortnite-vid.mp4";
import Link from "next/link";
import Image from "next/image";

export default function Section4() {
  return (
    <section className="section s4" id="streams">
      <h1>
        Streams
        <span>from Top</span>
        Players
      </h1>

      <div className="streams-container">
        <div className="stream stream1">
          <video src="#" autoPlay controls loop></video>
        </div>
        <div className="stream stream2">
          <video src="#" autoPlay controls loop></video>
        </div>
        <div className="stream stream3">
          <video src="#" autoPlay={true} controls loop></video>
        </div>
        <div className="stream stream4">
          <video src="#" autoPlay controls loop></video>
        </div>
      </div>
    </section>
  );
}
