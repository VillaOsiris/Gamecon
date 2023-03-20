import Head from "next/head";
import Navbar from "../components/navbar";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import Section5 from "../components/section5";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gamecon</title>
        <meta name="description" content="Gamming Community Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}
