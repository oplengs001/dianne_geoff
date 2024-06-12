import Brides from "@/components/Brides";
import Cover from "@/components/Cover";
import Date from "@/components/Date";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import Gallery from "@/components/Gallery";
import Gift from "@/components/Gift";
import { ToastContainer } from "react-toastify";

// Toastify CSS
import "react-toastify/dist/ReactToastify.css";
import Wishes from "@/components/Wishes";
import End from "@/components/End";
import NavMenu from "@/components/NavMenu";
import { useEffect } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function Invitation() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const router = useRouter();
  const { sesi } = router.query;

  return (
    <div className="bg-white">
      <main className={`bg-white overflow-hidden ${poppins.className}`}></main>
    </div>
  );
}
