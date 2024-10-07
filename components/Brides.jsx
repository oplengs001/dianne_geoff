import {
  Grand_Hotel,
  Parisienne,
  Poppins,
  Vollkorn_SC,
  Alex_Brush,
} from "next/font/google";
import Image from "next/image";
const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
});

const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
});
const vollkorn = Vollkorn_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  adjustFontFallback: false,
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: false,
});

export default function Brides() {
  return (
    <section
      id="brides"
      className="flex flex-col items-center py-5 bg-primary-900"
    >
      <h2
        data-aos="fade-down"
        className={`text-4xl text-center mb-4 ${parisienne.className} text-shadow text-shadow`}
      >
        The Bride and Groom
      </h2>
      <p
        data-aos="fade-down"
        className={`px-4 text-xs font-light text-center ${poppins.className}`}
      >
        Praise be to God Almighty, who has created His beings in companionship.
        Seeking the grace and blessing of the Lord, we aim to celebrate our
        union in holy matrimony.
      </p>

      <div data-aos="fade-left" className="p-1 my-2 bg-contain h-70 w-72">
        <Image
          src="/img/bridder.jpg"
          width={276}
          height={400}
          alt="rofiqoh"
          className="mt-2 px-7"
        />
        <p
          className={`text-center mt-2 text-3xl font-weight-bold ${alexBrush.className} text-shadow`}
        >
          Dianne Carla Fernandez
        </p>
      </div>

      <p
        data-aos="fade"
        className={`px-4 text-xs font-light text-center ${poppins.className}`}
      >
        Daughter of <br />
        Domingo Fernandez & Lit Fernandez
      </p>

      <Image
        data-aos="fade"
        src="/brides-divider.svg"
        width={276}
        height={400}
        alt="divider"
      />

      <div data-aos="fade-right" className="p-1 my-2 bg-contain h-65 w-72">
        <Image
          src="/img/groomy.jpg"
          width={276}
          height={400}
          alt="rofiqoh"
          className="px-7"
        />
        <p
          className={`text-center text-3xl font-weight-bold ${alexBrush.className} text-shadow`}
        >
          Geoffrey Salinas
        </p>
      </div>
      <p
        data-aos="fade"
        className={`px-4 text-xs font-light text-center ${poppins.className}`}
      >
        Youngest Son of
        <br />
        Ediwn Salinas & Ofelia Salinas
      </p>
    </section>
  );
}
