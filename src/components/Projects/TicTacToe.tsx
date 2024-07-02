import Image from "next/image";
import ticTacToe from "@/icons/ticTacToe.png";
import Link from "next/link";

export default function TicTacToe() {
  return (
    <div className="bg-gradient-to-r from-emerald-100 to-violet-400 rounded-2xl p-24 h-full">
      <div className="flex justify-around items-center gap-5">
        <Image
          src={ticTacToe}
          width={350}
          height={100}
          alt="ticTacToe"
          className="rounded-2xl"
        />
        <div className="flex flex-col items-center">
          <Link
            href="https://tic-tac-toe-dusky-eight.vercel.app/"
            className="bg-white hover:bg-pink-300 font-bold py-3 px-8 rounded-full mb-5"
          >
            Game here!
          </Link>
          <div className="text-xl font-bold text-center">Tic-Tac-Toe</div>
          <div className="text-xl text-gray-300 text-center">
            Your favorite tic-tac-toe game.
          </div>
          <Link
            className="font-bold text-2xl mt-5 text-gray-300 hover:text-lime-200"
            href="https://github.com/dashok-myr/tic-tac-toe"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
}
