import "add-to-calendar-button";

import Image from "next/image";
import { Poppins, Alex_Brush } from "next/font/google";
const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function End() {
  return (
    <div>
      <section
        className={`bg-cover-welcome bg-cover bg-center min-h-screen min-w-full  ${poppins.className}`}
      >
        <div className="absolute min-w-full min-h-screen backdrop-brightness-75"></div>
        <div className="absolute flex flex-col items-center justify-end min-w-full min-h-screen">
          <p className="mb-2 text-2xl font-bold">With Love and Excitement</p>
          <h1
            data-aos="fade"
            className={`text-white text-4xl text-center mb-5 ${alexBrush.className}`}
          >
            Geoff & Dianne
          </h1>
        </div>
      </section>
    </div>
  );
}
