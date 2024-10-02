import Banner from "@/components/Banner";
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
  display: "swap",
  adjustFontFallback: false,
});

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 500,
    });

  }, []); // Dependency on isScrolling

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
        <meta property="og:title" content="Geoffrey & Dianne" />
        <meta
          property="og:url"
          content="dianne-geoff.vercel.app"
        />
        {/* <meta property="og:description" content="Kami memohon doa restu dari Bapak/Ibu/Saudara/(i)" /> */}
        <meta
          property="og:image"
          content="https://i.ibb.co/Drjn7ML/568fd9df-4b64-4194-8972-c317df79c015.jpg"
        />
        <meta property="og:type" content="article" />
      </Head>
      {/* BANNER */}
      <Banner to={to} />
      {/* NAV MENU */}

    </div>
  );
}
