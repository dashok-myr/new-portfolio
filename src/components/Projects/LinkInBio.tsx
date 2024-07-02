import ButtonClickMe from "@/components/ButtonClickMe";
import Link from "next/link";
import Image from "next/image";
import iphone from "@/icons/programmingLabels/iphone.png";

export default function LinkInBio() {
  return (
    <div className="flex items-center justify-center w-full bg-gradient-to-r from-red-200 to-lime-200 rounded-2xl">
      <div className="flex flex-col flex-1 items-center ml-20">
        <ButtonClickMe link="https://link-in-bio-lemon.vercel.app/" />
        <div className="text-6xl font-bold mt-10 text-center">
          Check my project Link-in-Bio
        </div>
        <div className="text-2xl text-gray-400">
          All of your links in one place, designed your way.
        </div>
        <Link
          className="font-bold text-2xl mt-5 text-gray-400 hover:text-lime-200"
          href="https://github.com/dashok-myr/Link-In-Bio"
        >
          View Code
        </Link>
      </div>
      <div className="flex">
        <Image
          src={iphone}
          alt="ticTacToe"
          className="rounded-2xl"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}
