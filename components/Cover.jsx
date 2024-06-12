import "add-to-calendar-button";

import Image from "next/image";
import { Cormorant, Alex_Brush, Poppins } from "next/font/google";
import CountdownTimer from "./CountdownTimer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: false,
});
const cormorant = Cormorant({ subsets: ["latin"] });
const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
});

export default function Cover() {
  return (
    <section
      id="cover"
      className={`flex flex-col justify-between w-full min-h-screen bg-center bg-cover bg-cover-hero overflow-hidden ${poppins.className}`}
    >
      <div>
        <div data-aos="fade-down" className="flex justify-between px-10 mt-12">
          <Image src="/cover-divider.svg" width={25} height={5} alt="divider" />
          <h3
            className={`text-primary-200 text-2xl text-center ${cormorant.className}`}
          >
            DiannesweredPrayerofGeoff
          </h3>
          <Image src="/cover-divider.svg" width={25} height={5} alt="divider" />
        </div>

        <h1
          data-aos="fade"
          className={`text-primary-200 text-5xl text-center mt-5 ${alexBrush.className}`}
        >
          Geoff & Dianne
        </h1>

        <h3 data-aos="fade" className="mt-2 text-center text-primary-200">
          11.30.2024
        </h3>
      </div>

      <div
        data-aos="fade"
        className="items-center px-6 py-4 mx-6 mt-4 mb-16 border-2 border-white shadow-xl bg-black/60 shadow-black/60 rounded-xl"
      >
        {/* Countdown Timer */}
        <CountdownTimer targetTime={new Date("Nov 30, 2024 14:00:00")} />

        <a href="https://calendar.app.google/zD13peaqGK4UTnzMA" target="_blank">
          <button className="block px-6 py-2 mx-auto font-semibold transition border rounded-lg hover:bg-primary-900 hover:bg-opacity-20 border-white text-white">
            Save the Date
          </button>
        </a>
      </div>
    </section>
  );
}
