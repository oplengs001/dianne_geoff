import axios from "axios";
import moment from "moment";
import { Grand_Hotel, Poppins, Parisienne, Alex_Brush } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { isError, useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
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

  const fetchWishes = () => {
    return axios.get(
      "https://api.sheetson.com/v2/sheets/Sheet1?apiKey=QPYB8mklu-9fkWR4ML1pEeWiGCP5FqCXcGeeSkEDxUVGeAc7pRozPV4JMHg",
    );
  };

  const {
    isLoading: isWishesLoading,
    isError: isWishesError,
    error: wishListError,
  } = useQuery("wishes", fetchWishes, {
    onSuccess: (data) => {
      setDataList([...data.data.results]);
    },
    onError: () => {
      console.log(wishListError);
    },
  });

  const addWishes = (wishesData) => {
    return axios.post(
      "https://api.sheetson.com/v2/sheets/Sheet1",
      {
        ...wishesData,
      },
      {
        headers: {
          Authorization:
            "Bearer BwcI4qkYDFQXaEnnRdOhc1g2uCmiQsIG1NyiOZcF-Db7-dZYkO7Rb_RNl3Q",
          "X-Spreadsheet-Id": "10IlBYqeLnEEFqYYtCHL4Bc_UWXUWl-4k6q_-ZRFqvUA",
          "Content-Type": "application/json",
        },
      },
    );
  };

  const {
    mutate: addWishesData,
    isLoading,
    isSuccess,
    error,
  } = useMutation(addWishes, {
    onSuccess: (data) => {
      toast("Terimakasih! Ucapan & Doa anda telah tersimpan", {
        type: "success",
      });
      setDataList([...dataList, data.data]);
    },
    onError: () => {
      console.log(error, "error");
      toast(error.message, { type: "error" });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    const date = new Date();
    const unix = date.getTime();
    const timestamp = moment().format("MMMM Do YYYY, h:mm a");

    addWishesData({ name, wishes, timestamp, unix });
  };

  // ro9rt4qmr43u5
  return (
    <section
      id="wishes"
      className={`flex flex-col items-stretch py-12 bg-primary-900 px-6 ${poppins.className}`}
    >
      <h2
        data-aos="fade"
        className={`text-4xl text-center mb-2 ${parisienne.className}`}
      >
        Wishes
      </h2>
      <p data-aos="fade" className="mb-6 text-xs text-center">
        Send us your prayers and best wishes
      </p>
      {isSuccess ? (
        <div className="p-3 mb-8 bg-white rounded-lg shadow shadow-black/20">
          <p className="text-sm text-black">
            Terimakasih <span className="font-semibold">{name}</span> atas
            Ucapan & Doa nya
          </p>
        </div>
      ) : (
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
            {isLoading ? <>Loading...</> : <>Send Greetings</>}
          </button>
        </form>
      )}

      <div data-aos="fade" className="h-64 overflow-scroll">
        {isWishesError || isWishesLoading ? (
          <p>Loading Data ...</p>
        ) : (
          dataList
            .sort((a, b) => (a.unix < b.unix ? 1 : -1))
            .map((wish) => (
              <div
                key={wish.rowIndex}
                className="px-4 py-2 mb-2 text-black bg-white rounded-tr-lg rounded-bl-lg rounded-br-lg"
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-semibold truncate">{wish.name}</p>
                  <p className="text-xs">{wish.timestamp}</p>
                </div>
                <p className="text-sm">{wish.wishes}</p>
              </div>
            ))
        )}
      </div>
    </section>
  );
}
