import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-pager.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoPlay from "lightgallery/plugins/autoplay";
import lgPager from "lightgallery/plugins/pager";

import { Grand_Hotel, Parisienne } from "next/font/google";
const parisienne = Parisienne({
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

export default function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <section
      id="gallery"
      className="flex flex-col items-stretch py-12 bg-primary-900 px-6"
    >
      <h2
        data-aos="fade-down"
        className={`text-4xl text-center mb-6 ${parisienne.className}`}
      >
        Gallery
      </h2>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom, lgThumbnail, lgAutoPlay, lgPager]}
        elementClassNames="grid grid-cols-6 gap-x-2 gap-y-3"
        mode="lg-fade"
      >
        <a data-aos="fade" href="/img/1.jpeg" className="col-span-6">
          <img
            alt="Galeri 1"
            src="/img/1.jpeg"
            className=" h-full object-cover rounded-lg"
          />
        </a>
        <a data-aos="fade" href="/img/2.jpeg" className="col-span-2">
          <img
            alt="Galeri 2"
            src="/img/2.jpeg"
            className=" h-full object-cover rounded-lg"
          />
        </a>
        <a data-aos="fade" href="/img/3.jpeg" className="col-span-2">
          <img
            alt="Galeri 3"
            src="/img/3.jpeg"
            className="h-full object-cover rounded-lg"
          />
        </a>
        <a data-aos="fade" href="/img/4.jpeg" className="col-span-2">
          <img
            alt="Galeri 4"
            src="/img/4.jpeg"
            className="h-full object-cover rounded-lg"
          />
        </a>
        <a data-aos="fade" href="/img/5.jpeg" className="col-span-3">
          <img
            alt="Galeri 5"
            src="/img/5.jpeg"
            className="h-full object-cover rounded-lg"
          />
        </a>
        <a data-aos="fade" href="/img/6.jpeg" className="col-span-3">
          <img
            alt="Galeri 6"
            src="/img/6.jpeg"
            className="h-full object-cover rounded-lg"
          />
        </a>
        <a data-aos="fade" href="/img/7.jpeg" className="col-span-6">
          <img
            alt="Galeri 7"
            src="/img/7.jpeg"
            className="h-full object-cover rounded-lg"
          />
        </a>
      </LightGallery>
    </section>
  );
}
