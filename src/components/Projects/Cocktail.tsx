import Image from "next/image";
import cocktail from "@/icons/cocktail-project.png";
import Link from "next/link";

export default function Cocktail() {
  return (
    <div className="bg-gradient-to-r from-amber-100 to-purple-300 rounded-2xl p-24">
      <div className="flex flex-col items-center">
        <Image
          src={cocktail}
          width={500}
          height={500}
          alt="ticTacToe"
          className="rounded-2xl mb-7"
        />
        <Link
          href="https://cocktails-ten.vercel.app/"
          className="bg-white hover:bg-pink-300 text-xl font-bold py-3 px-8 rounded-full mb-5"
        >
          Party!
        </Link>
        <div className="text-5xl font-bold text-center">
          It is a cocktail time!
        </div>
        <div className="text-2xl text-gray-400 text-center">
          Enter the name of the cocktail and get the recipe.
        </div>
        <Link
          className="font-bold text-2xl mt-5 text-gray-400 hover:text-lime-200"
          href="https://github.com/dashok-myr/cocktails"
        >
          View Code
        </Link>
      </div>
    </div>
  );
}
