import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function () {
  return (
    <div className="flex flex-col justify-center items-start">
      <img src={"/img4.jpg"} alt="bike" />
      <div className="mt-4 text-left">
        <span className="text-xs font-light text-gray-500">Brompton</span>
        <p className="font-semibold text-lg">A Line Papyrus White</p>
        <p className="font-semibold text-gray-500">$1850</p>
        <div className="flex flex-row items-center justify-start mt-2">
          <div className="bg-green-500 rounded-full animate-ping w-2 h-2" />
          <p className="mx-2 text-sm font-semibold">In Stock</p>
          <Link
            href="/"
            className="px-4 py-2 bg-green-500 flex flex-row items-center space-x-2"
          >
            <FaWhatsapp className="text-white" />
            <span className="text-white font-semibold">Buy Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
