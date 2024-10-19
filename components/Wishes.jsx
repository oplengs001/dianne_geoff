import axios from "axios";
import moment from "moment";
import { Grand_Hotel, Poppins, Parisienne, Alex_Brush } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { isError, useQuery } from "react-query";
import { toast } from "react-toastify";
import { db } from "../lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";

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
  display: "swap",
  adjustFontFallback: false,
});

export default function Wishes() {
  const [name, setName] = useState("");
  const [wishes, setWishes] = useState("");
  const [dataList, setDataList] = useState([]);

  // Firestore subscription to the wishes collection
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "wishes"), (snapshot) => {
      const wishesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDataList(wishesData);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/wishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, wishes }),
    });

    if (response.ok) {
      toast("Greetings Sent, Thanks!", {
        type: "success",
      });

      setName("");
      setWishes("");
    } else {
      toast("Oops, Error submission please try again", {
        type: "error",
      });
    }
  };

  return (
    <section
      id="wishes"
      className={`flex flex-col items-stretch py-6 bg-primary-900 px-6 ${poppins.className}`}
    >
      <h2
        data-aos="fade"
        className={`text-4xl text-center mb-2 ${parisienne.className} text-shadow`}
      >
        Wishes
      </h2>
      <p data-aos="fade" className="mb-6 text-xs text-center">
        Send us your prayers and best wishes
      </p>

      <form data-aos="fade" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full px-2 py-1 mb-4 text-black bg-white border border-gray-200 rounded-lg drop-shadow-xl active:border-primary-900"
          required
        />
        <textarea
          type="text"
          id="wishes"
          name="wishes"
          value={wishes}
          onChange={(e) => setWishes(e.target.value)}
          placeholder="Write your message here"
          className="w-full px-2 py-1 mb-4 text-black bg-white border border-gray-200 rounded-lg drop-shadow-xl active:border-primary-900"
          required
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="block w-40 py-2 mx-auto mb-6 text-sm transition rounded-xl bg-primary-200 hover:bg-opacity-70"
        >
          Send Greetings
        </button>
      </form>

      <div data-aos="fade" className="h-64 overflow-y-scroll">
        {dataList.length === 0 ? (
          <p>No wishes yet...</p>
        ) : (
          dataList
            .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1)) // Assuming timestamp exists in your data
            .map((wish) => (
              <div
                key={wish.id}
                className="px-4 py-2 mb-2 text-black bg-white rounded-tr-lg rounded-bl-lg rounded-br-lg"
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-semibold truncate">{wish.name}</p>
                  <p className="text-xs">
                    {moment(wish.timestamp).format("LL")}
                  </p>{" "}
                  {/* Format timestamp */}
                </div>
                <p className="text-sm">{wish.wishes}</p>
              </div>
            ))
        )}
      </div>
    </section>
  );
}
