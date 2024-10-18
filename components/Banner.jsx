import Image from "next/image";
import { useState } from "react";
import { Cormorant, Alex_Brush, Poppins } from "next/font/google";
import RsvpForm from "./RsvpForm";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: false,
});
const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
});
const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});
export default function Banner({ to }) {
  const [isShow, setIsShow] = useState(true);
  const [isHide, setIsHide] = useState(false);

  return (
    <div
      className={`fixed z-50 top-0 right-0 bottom-0 left-0  transition-opacity duration-1000 ${
        isHide ? "hidden" : "block"
      } ${isShow ? "opacity-100" : "opacity-0"}`}
    >
      <div className="absolute z-10 min-w-full min-h-screen bg-black/20"></div>
      <div className="absolute z-0 min-w-full min-h-screen bg-center bg-cover bg-cover-welcome"></div>
      <section
        className={`absolute z-20 flex min-h-screen min-w-full flex-col justify-end items-center ${poppins.className}`}
      >
        <h1
          data-aos="fade"
          className={`text-white text-5xl text-center mt-5 ${alexBrush.className}`}
        >
          Dianne & Geoff
        </h1>
        <p
          data-aos="fade"
          className={`text-white text-2xl text-center  ${cormorant.className}`}
        >
          #DiannesweredprayerofGeoff
        </p>
        <h3 data-aos="fade" className={`text-white text-sm text-center`}>
          11.30.2024
        </h3>
        <div className="items-center px-6 py-4 mx-6 mt-4 mb-16 border-2 border-white shadow-xl bg-black/30 shadow-black/60 rounded-xl">
          <p className="text-sm font-medium text-center text-white">
            Santa Clara Parish Church , Sto. Tomas Batangas
          </p>

          <p className="mt-4 mb-4 text-2xl font-bold text-center text-white animate-pulse">
            {to}
          </p>

          <a
            href="home"
            onClick={() => {
              setIsShow(false);

              setTimeout(function () {
                setIsHide(true);
              }, 1000);
            }}
            className={`block w-40 px-6 py-2 mx-auto my-5 text-md font-semibold text-center text-black transition bg-white rounded-lg hover:bg-gray-300  shineAnimation`}
          >
            Open Invite
          </a>
          <RsvpForm />
        </div>
      </section>
    </div>
  );
}
