import Image from "next/image";
import matreshka from "@/icons/matreshka.png";
import Link from "next/link";

export default function Matreshka() {
  return (
    <div className="bg-gradient-to-r from-teal-300 to-red-300 rounded-2xl p-24">
      <div className="flex flex-col items-center">
        <Image
          src={matreshka}
          width={550}
          height={550}
          alt="ticTacToe"
          className="rounded-2xl mb-7"
        />
        <Link
          href="https://matreshka-shop.vercel.app/"
          className="bg-white hover:bg-pink-300 text-xl font-bold py-3 px-8 rounded-full mb-5"
        >
          Let&apos;s shop
        </Link>
        <div className="text-5xl font-bold text-center">E-commerce store</div>
        <div className="text-2xl text-gray-400 text-center">
          Shop, save to favorites and buy.
        </div>
        <Link
          className="font-bold text-2xl mt-5 text-gray-400 hover:text-lime-200"
          href="https://github.com/dashok-myr/matreshka-shop"
        >
          View Code
        </Link>
      </div>
    </div>
  );
}
