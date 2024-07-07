import Image from "next/image";
import countries from "@/icons/countries.png";
import Link from "next/link";

export default function Countries() {
  return (
    <div className="bg-gradient-to-r from-rose-50 to-rose-300 rounded-2xl p-5 md:p-24 h-full">
      <div className="flex flex-col items-center">
        <Image
          src={countries}
          width={550}
          height={550}
          alt="ticTacToe"
          className="rounded-2xl mb-3"
        />
        <Link
          href="https://countries-l2i3gsldg-dashok-myr.vercel.app/"
          className="bg-white hover:bg-pink-300 font-bold py-3 px-8 rounded-full mb-5"
        >
          Country
        </Link>
        <div className="text-3xl font-bold text-center">
          Search for countries
        </div>
        <div className="text-2xl text-gray-400 text-center">
          You can search countries by its location and more.
        </div>
        <Link
          className="text-2xl font-bold mt-5 text-gray-400 hover:text-lime-200"
          href="https://github.com/dashok-myr/countries"
        >
          View Code
        </Link>
      </div>
    </div>
  );
}
