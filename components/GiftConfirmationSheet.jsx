import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export default function GiftConfirmationSheet() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [note, setNote] = useState("");

  const addConfirmation = (confirmationData) => {
    return axios.post(
      "https://api.sheetson.com/v2/sheets/Sheet1",
      {
        ...confirmationData,
      },
      {
        headers: {
          Authorization:
            "Bearer BwcI4qkYDFQXaEnnRdOhc1g2uCmiQsIG1NyiOZcF-Db7-dZYkO7Rb_RNl3Q",
          "X-Spreadsheet-Id": "12JPFimibUXdUbMIrwf20fNmHYoM7RGAPhYA0kBfqPxY",
          "Content-Type": "application/json",
        },
      }
    );
  };

  const {
    mutate: addConfirmationData,
    isLoading,
    isSuccess,
    error,
  } = useMutation(addConfirmation, {
    onSuccess: () => {
      toast("Terimakasih! Konfirmasi hadiah anda berhasil disimpan.", {
        type: "success",
      });
    },
    onError: () => {
      console.log(error, "error");
      toast(error.message, { type: "error" });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    const timestamp = moment().format("MMMM Do YYYY, h:mm a");
    addConfirmationData({ name, type, note, timestamp });
  };

  return (
    <div className="flex flex-col items-center pt-6 mx-2 rounded-tl-lg rounded-tr-lg bg-white/80">
      <Image
        src="/konfirmasi-hadiah.svg"
        alt="Hadiah Nikah"
        width={230}
        height={50}
      />
      <p className="px-6 mt-1 mb-6 text-xs text-center text-primary-900">
        Kami sangat berterima kasih kepada Bapak/Ibu/Saudara/i yang berkenan
        memberikan tanda kasih kepada kami. Silakan melakukan konfirmasi pada
        kolom di bawah untuk mempermudah pendataan
      </p>
      <div className="w-full p-4 bg-white shadow rounded-tl-xl rounded-tr-xl shadow-black/20">
        {isSuccess ? (
          <div className="p-2 bg-white rounded-lg shadow shadow-black/20">
            <p className="text-sm text-black">
              Terimakasih <span className="font-semibold">{name}</span> atas
              konfirmasinya
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="block mb-1 text-black">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              className="w-full px-2 py-1 mb-4 text-black bg-white border border-gray-200 rounded-lg drop-shadow-xl active:border-primary-900"
              required
            />
            <label htmlFor="type" className="block mb-1 text-black">
              Konfirmasi Kehadiran
            </label>
            <select
              type="text"
              id="type"
              name="type"
              placeholder="Pilih Hadiah"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-2 py-1 mb-4 text-black bg-white border border-gray-200 rounded-lg appearance-none drop-shadow-xl active:border-primary-900"
              required
            >
              <option value="">Pilih Hadiah</option>
              <option value="E-Money">E-Money</option>
              <option value="Barang">Barang</option>
            </select>
            <label htmlFor="note" className="block mb-1 text-black">
              Keterangan
            </label>
            <textarea
              type="text"
              id="note"
              name="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Silahkan berikan pesan kepada kami"
              className="w-full px-2 py-1 mb-4 text-black bg-white border border-gray-200 rounded-lg drop-shadow-xl active:border-primary-900"
              required
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="block w-full py-2 mx-auto mb-12 text-sm transition rounded-xl bg-primary-900 hover:bg-opacity-70"
            >
              {isLoading ? <>Menyimpan...</> : <>Konfirmasi</>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
