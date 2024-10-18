import "add-to-calendar-button";
import Image from "next/image";
import { Cormorant, Alex_Brush, Poppins } from "next/font/google";
import CountdownTimer from "./CountdownTimer";
import { useEffect, useState } from "react";

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

const images = Array.from(
  { length: 10 },
  (_, index) => `/img/${index + 1}.jpeg`,
);

export default function Cover() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section
      id="cover"
      className={`relative flex flex-col justify-between w-full min-h-screen bg-center bg-cover overflow-hidden ${poppins.className}`}
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {/* Gradient Overlay for 20% height */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black to-transparent" />

      <div className="relative z-10">
        <center>
          <div data-aos="fade-down" className="px-10 mt-12">
            <h1
              data-aos="fade"
              className={`text-6xl text-center mt-5 ${alexBrush.className} text-shadow`}
            >
              Geoff & Dianne
            </h1>
          </div>
        </center>
        <h3
          className={`text-F-200 text-2xl text-black-200 text-center ${cormorant.className} text-shadow`}
        >
          #GEOFFintelytheoneforDIANNE
        </h3>

        <h3 data-aos="fade" className="mt-2 text-center text-shadow">
          11.30.2024
        </h3>
      </div>
      <div
        data-aos="fade"
        className="relative z-10 items-center px-6 py-4 mx-6 mt-4 mb-16 border-2 border-white shadow-xl bg-black/60 shadow-black/60 rounded-xl"
      >
        {/* Countdown Timer */}
        <CountdownTimer targetTime={new Date("Nov 30, 2024 14:00:00")} />
        <a href="https://calendar.app.google/Zx7S6E1EzFdbdkLV6" target="_blank">
          <button className="block px-6 py-2 mx-auto font-semibold transition border rounded-lg hover:bg-primary-900 hover:bg-opacity-20 border-white text-white">
            Save the Date
          </button>
        </a>
      </div>
    </section>
  );
}
