import {
  Grand_Hotel,
  Parisienne,
  Poppins,
  Vollkorn_SC,
  Alex_Brush,
} from "next/font/google";
import Image from "next/image";

const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  weight: ["400"],
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
});

export default function ImportantDates({ sesi }) {
  return (
    <section
      id="dates"
      className={`flex flex-col items-stretch py-5 bg-primary-300`}
    >
      <h2
        data-aos="fade-down"
        className={`text-4xl text-center mb-4 ${parisienne.className}`}
      >
        Dates
      </h2>

      <div
        data-aos="fade"
        className="mx-5 mb-6 bg-center bg-cover bg-cover-dates h-52 rounded-xl"
      ></div>

      <div
        data-aos="fade-down"
        className="mx-5 bg-white drop-shadow rounded-xl"
      >
        {/* 1 Date Info */}
        <div data-aos="fade-left" className="flex flex-col items-stretch">
          <div className="flex items-center justify-between pt-8 pl-4 pr-6 mb-4">
            <div className="flex flex-col items-stretch">
              <h3 className="mb-2 text-xl font-medium text-primary-900">
                Sunday
              </h3>
              <div className="flex items-center mb-1">
                <p className="mr-2 text-3xl font-bold text-primary-900">30</p>
                <div className="flex flex-col">
                  <p className="text-lg text-primary-900">Nov 2024</p>

                  <p className="text-xs font-bold text-primary-900">
                    Santa Clara, City of Sto. Tomas, Batangas
                  </p>
                  <p className="text-sm font-bold text-primary-900 text-start">
                    Time : 2:00PM
                  </p>
                </div>
              </div>
              <Image
                src="/dates-divider-sm.svg"
                alt="akad nikah"
                width={210}
                height={4}
              />
              <p className="my-1 text-xs font-medium text-primary-900">
                Sta. Clara Parish Church
              </p>
              <p className="text-xs text-primary-900">
                Santo Tomas-Lipa Road, Poblacion, Sta. Clara <br />
                Sto. Tomas, 4234 Batangas, Philippines
              </p>
            </div>
            <h3
              className={`my-1 text-4xl font-bold text-primary-900 ${parisienne.className}`}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              Ceremony
            </h3>
          </div>

          <a
            href="https://maps.app.goo.gl/yb5XqwXPXLsrj32k7"
            target="_blank"
            className="block px-8 py-2 mx-auto text-xs transition border rounded-xl bg-primary-900 hover:bg-opacity-70 "
          >
            Open Maps
          </a>
        </div>

        <Image
          data-aos="fade-down"
          src="/dates-divider.svg"
          alt="divider"
          width={600}
          height={30}
          className="px-4 my-6"
        />

        {/* 1 Date Info */}
        <div data-aos="fade-right" className="flex flex-col items-stretch mb-6">
          <div className="flex items-center justify-between pl-6 pr-4 mb-4">
            <div>
              {" "}
              <h3
                className={`my-1 text-4xl font-bold text-primary-900 ${parisienne.className}`}
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  position: "absolute",
                  bottom: 60,
                  left: 50,
                  transformOrigin: "left",
                }}
              >
                Reception
              </h3>
            </div>
            <div className="flex flex-col items-end">
              <h3 className="mb-2 text-2xl font-medium text-end text-primary-900">
                Sunday
              </h3>
              <div className="flex items-center justify-end mb-1">
                <div className="flex flex-col">
                  <p className="text-xl text-primary-900 text-end">Nov 2023</p>
                  <p className="text-sm font-bold text-primary-900 text-end">
                    Time: 5:00 PM
                  </p>
                </div>
                <p className="ml-2 text-4xl font-bold text-primary-900">30</p>
              </div>
              <h3
                className={`my-1 text-4xl font-bold text-primary-900 ${parisienne.className}`}
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  position: "absolute",
                  bottom: 60,
                  left: 50,
                  transformOrigin: "left",
                }}
              >
                Reception
              </h3>
              <p className="my-1 text-xs font-medium text-primary-900">
                Gunita Villas and Pavilion
              </p>
              <p className="text-xs text-primary-900 text-end">
                Gunita Villas and Pavilion, Santo Tomas <br />
                Lipa Rd, Santo Tomas, 4234 Batangas
              </p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/gVJmwBds16mzUeFr5"
            target="_blank"
            className="block px-8 py-2 mx-auto text-xs transition border rounded-xl bg-primary-900 hover:bg-opacity-70 "
          >
            Open Maps
          </a>
        </div>
      </div>
    </section>
  );
}
