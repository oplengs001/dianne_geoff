import { Grand_Hotel, Poppins, Parisienne, Alex_Brush } from "next/font/google";
import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: false,
});
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
});

export default function Guests() {
  const [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "rsvps"), (snapshot) => {
      const rsvpData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRsvps(rsvpData);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);
  return (
    <div className={`bg-primary-900 px-6 ${poppins.className} h-screen`}>
      <h2
        data-aos="fade"
        className={`text-4xl text-center mb-2 ${parisienne.className} text-shadow`}
      >
        Guest List
      </h2>
      <p data-aos="fade" className="mb-6 text-xs text-center">
        Guest RSVP
      </p>

      <div>
        {rsvps.map((rsvp) => (
          <div
            key={rsvp.id}
            className="px-4 py-2 mb-2 text-black bg-white rounded-tr-lg rounded-bl-lg rounded-br-lg flex items-center justify-between"
          >
            <div className="flex-grow">
              <p className="text-sm font-semibold truncate">{rsvp.name}</p>
              <p className="text-sm">{rsvp.number}</p>
              <p className="text-sm font-semibold truncate">{rsvp.email}</p>
            </div>
            <div className="flex items-center">
              {/* Conditional rendering for attending status */}
              {rsvp.attending === "yes" ? (
                <svg
                  className="w-8 h-8 inline-block" // Adjust dimensions as needed
                  fill="none"
                  stroke="green" // Set stroke color here (can be a variable)
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="cross"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
