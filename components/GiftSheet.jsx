import Image from "next/image";
import { toast } from "react-toastify";

export default function GiftSheet() {
  const copyBankNumber = () => {
    navigator.clipboard.writeText("0390836720");
    toast("No. Rekening berhasil disalin di papan klip", { type: "success" });
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(
      "Jl. Anjasmoro gang 1A RT 05  RW 01 Desa Turirejo Kecamatan Lawang Kabupaten Malang"
    );
    toast("Alamat berhasil disalin di papan klip", { type: "success" });
  };

  return (
    <div className="flex flex-col items-center py-6 mx-2 rounded-tl-lg rounded-tr-lg bg-white/80">
      <Image
        src="/hadiah-nikah.svg"
        alt="Hadiah Nikah"
        width={230}
        height={50}
      />
      <p className="px-20 mt-1 mb-6 text-xs text-center text-primary-900">
        Silahkan kirim hadiah Melalui nomor rekening dompet digital berikut:
      </p>
      <img
        onClick={copyBankNumber}
        src="/img/bank.png"
        alt="bank account"
        width={340}
        className="mb-4"
      />
      <img
        onClick={copyAddress}
        src="/img/address.png"
        alt="bank account"
        width={340}
        className="mb-8"
      />
      <p className="px-20 mb-8 text-xl font-semibold text-center text-primary-900">
        Terimakasih
      </p>
    </div>
  );
}
