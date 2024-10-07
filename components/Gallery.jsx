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

  const images = Array.from({ length: 10 }, (_, index) => ({
    src: `/img/${index + 1}.jpeg`,
    alt: `Galeri ${index + 1}`,
  }));

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
        elementClassNames="grid grid-cols-3 gap-x-2 gap-y-3"
        mode="lg-fade"
      >
        {images.map((image, index) => (
          <a key={index} data-aos="fade" href={image.src}>
            <img
              alt={image.alt}
              src={image.src}
              className="h-full object-cover rounded-lg"
            />
          </a>
        ))}
      </LightGallery>
    </section>
  );
}
