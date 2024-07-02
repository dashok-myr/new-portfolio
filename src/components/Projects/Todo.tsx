import Image from "next/image";
import todo from "@/icons/todo.png";
import Link from "next/link";

export default function Todo() {
  return (
    <div className="bg-gradient-to-r from-rose-50 to-green-200 rounded-2xl py-10 px-5 h-full">
      <div className="flex flex-col items-center">
        <Image
          src={todo}
          width={600}
          height={550}
          alt="ticTacToe"
          className="rounded-2xl mb-3"
        />
        <Link
          href="https://todo-list-eta-seven-31.vercel.app/?vercelToolbarCode=M7jWuS37FSzsZCE"
          className="bg-white hover:bg-pink-300 font-bold py-3 px-8 rounded-full mb-5"
        >
          Do it!
        </Link>
        <div className="font-bold text-center"> ToDo list</div>
        <div className="text-gray-400 text-center">
          Add, delete and plan your day.
        </div>
        <Link
          className="font-bold mt-5 text-gray-400 hover:text-lime-200"
          href="https://github.com/dashok-myr/todo/tree/main/src/app"
        >
          View Code
        </Link>
      </div>
    </div>
  );
}
