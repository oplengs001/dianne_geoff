import { Parisienne } from "next/font/google";
import Image from "next/image";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
});

export default function Entourage() {
  return (
    <section
      id="dates"
      className={`flex flex-col items-stretch py-5 bg-primary-900`}
    >
      <h2
        data-aos="fade-down"
        className={`text-4xl text-center mb-4 ${parisienne.className} text-shadow`}
      >
        Entourage
      </h2>
      <div
        data-aos="fade-down"
        className="mx-5 bg-white drop-shadow rounded-xl"
      >
        <div data-aos="fade-left" className="flex flex-col items-stretch">
          <center>
            <img
              src={"/img/entourage.jpeg"}
              className="object-cover rounded-lg w-full h-full"
            />
          </center>
        </div>
      </div>
      <br />
    </section>
  );
}
