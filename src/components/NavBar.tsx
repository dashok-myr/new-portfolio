import star from "../icons/icons8-star-64.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex w-full h-16 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
      <div className="flex items-center justify-center w-full gap-2">
        <div className="flex items-center gap-1">
          <Image src={star} alt="star" width={30} height={30} />
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            2024
          </div>
        </div>
        <div className="font-semibold">The Top Front-end Engineer of 2024</div>
        <div>Check this out!</div>
      </div>
    </div>
  );
}
