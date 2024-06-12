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
import { useEffect, useState } from "react";

// Toastify CSS
import "react-toastify/dist/ReactToastify.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function Home() {
  const [audio, setAudio] = useState(null);
  const [isPlay, setIsPlay] = useState(true);
  const [isPlayerShow, setIsPlayerShow] = useState(false);

  const playAudio = (isPlay) => {
    if (isPlay) {
      audio?.play();
      setIsPlay(true);
      return;
    }

    audio?.pause();
    setIsPlay(false);
  };

  const handleScroll = () => {
    const position = window.scrollY;

    if (position > 844) {
      setIsPlayerShow(true);
    } else {
      setIsPlayerShow(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
    });

    setAudio(new Audio("/music/song.mp3"));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const { to, sesi } = router.query;

  return (
    <div className={`${poppins.className} text-white`}>
      <Head>
        <title>Geoff & Dianne</title>
        {/* <meta
          name="description"
          content="Kami memohon doa restu dari Bapak/Ibu/Saudara/(i)"
        /> */}
        <meta property="og:title" content="Ofi & Wildan - Ajakanonline.com" />
        <meta
          property="og:url"
          content="https://wedding-ofi-wildan.ajakanonline.com/"
        />
        {/* <meta property="og:description" content="Kami memohon doa restu dari Bapak/Ibu/Saudara/(i)" /> */}
        <meta
          property="og:image"
          content="https://wildan-ofi-wedding.vercel.app/img/thumb.jpg"
        />
        <meta property="og:type" content="article" />
      </Head>
      {/* BANNER */}
      <Banner to={to} onOpen={playAudio} />
      {/* NAV MENU */}
      <NavMenu />
      {/* PLAYER */}
      <button
        onClick={() => playAudio(!isPlay)}
        className={`fixed transition z-40 flex items-center justify-center w-12 h-12 border border-black rounded-full bottom-16 right-2 bg-white/50 ${
          isPlayerShow ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          alt="playback"
          src={isPlay ? "/stop.svg" : "/play.svg"}
          width={20}
          height={20}
        />
      </button>
      <main className={`bg-white overflow-hidden`}>
        <Head>
          <title>DiannesweredprayerofGeoff</title>
        </Head>
        {/* COVER */}
        <Cover />

        {/* BRIDES */}
        <Brides />

        {/* DATE */}
        <ImportantDates sesi={sesi} />

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
