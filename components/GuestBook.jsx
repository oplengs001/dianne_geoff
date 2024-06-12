import axios from "axios";
import moment from "moment/moment";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");

  const addAttendance = (attendanceData) => {
    return axios.post(
      "https://api.sheetson.com/v2/sheets/Sheet1",
      {
        ...attendanceData,
      },
      {
        headers: {
          Authorization:
            "Bearer BwcI4qkYDFQXaEnnRdOhc1g2uCmiQsIG1NyiOZcF-Db7-dZYkO7Rb_RNl3Q",
          "X-Spreadsheet-Id": "1siPOw8jH7ms_gNrtL0SNRXujYm6eebZxRPl275Xgupc",
          "Content-Type": "application/json",
        },
      },
    );
  };

  const {
    mutate: addAttendanceData,
    isLoading,
    isSuccess,
    error,
  } = useMutation(addAttendance, {
    onSuccess: () => {
      toast("Terimakasih! Berhasil menyimpan buku tamu", { type: "success" });
    },
    onError: () => {
      console.log(error, "error");
      toast(error.message, { type: "error" });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    const timestamp = moment().format("MMMM Do YYYY, h:mm:ss a");
    addAttendanceData({ name, attendance, timestamp });
  };

  return (
    <></>
    // <div data-aos="fade" className="bg-white rounded-xl drop-shadow-lg px-6">
    //   <h3 className="text-black font-semibold text-3xl mt-4 mb-1 text-center">
    //     Buku Tamu
    //   </h3>
    //   <p className="text-black text-xs text-center mb-4">
    //     Silahkan isi form kehadiran dibawah ini.
    //   </p>
    //   {isSuccess ? (
    //     <div className="p-2 bg-white shadow shadow-black/20 rounded-lg mb-6">
    //       <p className="text-sm text-black">
    //         Terimakasih <span className="font-semibold">{name}</span> atas
    //         konfirmasinya
    //       </p>
    //     </div>
    //   ) : (
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="name" className="text-black block mb-1">
    //         Nama
    //       </label>
    //       <input
    //         type="text"
    //         id="name"
    //         name="name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //         placeholder="Nama Anda"
    //         className="rounded-lg border-gray-200 border w-full bg-white px-2 py-1 drop-shadow-xl text-black active:border-primary-900 mb-4"
    //         required
    //       />
    //       <label htmlFor="attendance" className="text-black block mb-1">
    //         Konfirmasi Kehadiran
    //       </label>
    //       <select
    //         type="text"
    //         id="attendance"
    //         name="attendance"
    //         placeholder="Nama Anda"
    //         value={attendance}
    //         onChange={(e) => setAttendance(e.target.value)}
    //         className="rounded-lg border-gray-200 border w-full bg-white px-2 py-1 drop-shadow-xl text-black active:border-primary-900 appearance-none"
    //         required
    //       >
    //         <option value="">Pilih Kehadiran</option>
    //         <option value="Hadir">Hadir</option>
    //         <option value="Tidak Hadir">Tidak Hadir</option>
    //       </select>
    //       <button
    //         type="submit"
    //         className="block w-full py-2 mx-auto transition text-sm rounded-xl bg-primary-900 hover:bg-opacity-70 my-6"
    //       >
    //         {isLoading ? <>Menyimpan...</> : <>Konfirmasi</>}
    //       </button>
    //     </form>
    //   )}
    // </div>
  );
}
