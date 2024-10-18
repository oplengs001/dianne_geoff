import NavMenu from "@/components/NavMenu";
import Gallery from "@/components/Gallery";
import Banner from "@/components/Banner";
import Wishes from "@/components/Wishes";
import Brides from "@/components/Brides";
import Cover from "@/components/Cover";
import ImportantDates from "@/components/Date";
import Gift from "@/components/Gift";
import End from "@/components/End";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { useEffect, useState, useRef } from "react";

// Toastify CSS
import "react-toastify/dist/ReactToastify.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: false,
});

export default function HomePage() {
  const [audio, setAudio] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    setAudio(new Audio("/music/song.mp3"));
  }, []);
  audio?.play();

  return (
    <div className={`${poppins.className} text-white`}>
      <Head>
        <title>Geoff & Dianne</title>
        {/* <meta
          name="description"
          content="Kami memohon doa restu dari Bapak/Ibu/Saudara/(i)"
        /> */}
        <meta property="og:title" content="Geoffrey & Dianne" />
        <meta property="og:url" content="dianne-geoff.vercel.app" />
        {/* <meta property="og:description" content="Kami memohon doa restu dari Bapak/Ibu/Saudara/(i)" /> */}
        <meta
          property="og:image"
          content="https://i.ibb.co/Drjn7ML/568fd9df-4b64-4194-8972-c317df79c015.jpg"
        />
        <meta property="og:type" content="article" />
      </Head>
      {/* BANNER */}

      {/* NAV MENU */}
      <NavMenu />
      {/* PLAYER */}

      <main className={`bg-white overflow-hidden`}>
        <Head>
          <title>DiannesweredprayerofGeoff</title>
        </Head>
        {/* COVER */}
        <Cover />

        {/* BRIDES */}
        <Brides />

        {/* DATE */}
        <ImportantDates />

        {/* GALLERT */}
        <Gallery />

        {/* HADIAH & BUKU TAMU */}
        <Gift />

        {/* UCAPAN DOA */}
        <Wishes />

        {/* END */}
        <End />

        <div className="p-4 pb-16 bg-white">
          <p className="text-xs text-center text-black">© Copyright 2024</p>
        </div>

        <ToastContainer />
      </main>
    </div>
  );
}
