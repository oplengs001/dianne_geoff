import { Grand_Hotel, Poppins, Parisienne } from "next/font/google";
import GuestBook from "./GuestBook";
import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

// bottom sheet css
import "react-spring-bottom-sheet/dist/style.css";
import GiftSheet from "./GiftSheet";
import GiftConfirmationSheet from "./GiftConfirmationSheet";

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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function Gift() {
  const [isSendGiftOpen, setIsSendGiftOpen] = useState(false);
  const [isGiftConfirmationOpen, setIsGiftConfirmationOpen] = useState(false);

  return (
    <section
      id="others"
      className={`flex flex-col items-stretch py-5 bg-primary-300 px-6 ${poppins.className}`}
    >
      <h2
        data-aos="fade-dwon"
        className={`text-4xl text-center mb-2 ${parisienne.className}`}
      >
        Gift Guide
      </h2>
      <p
        data-aos="fade-down"
        className={`text-xs text-center mb-6 ${poppins.className}`}
      >
        With all that we have, We are trully blessed. your presence and prayer
        are that we reques. But if you desired to give nonetheless, monetary
        gift is the one we suggest
      </p>
      {/* Sheet Gift */}
      <BottomSheet
        className="bg-primary-900"
        open={isSendGiftOpen}
        onDismiss={() => setIsSendGiftOpen(false)}
      >
        <GiftSheet />
      </BottomSheet>
      {/* Sheet Gift Confirmation */}
      <BottomSheet
        open={isGiftConfirmationOpen}
        onDismiss={() => setIsGiftConfirmationOpen(false)}
      >
        <GiftConfirmationSheet />
      </BottomSheet>

      {/* GUEST BOOK */}
      <GuestBook />
    </section>
  );
}
