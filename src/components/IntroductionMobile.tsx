import me from "../icons/me.jpeg";
import Image from "next/image";

export default function IntroductionMobile() {
  return (
    <div className="flex flex-col items-center justify-center w-screen mt-10">
      <Image src={me} alt="me" width={200} className="rounded-full" />
      <div className="flex flex-col gap-3 mt-7">
        <div className="text-gray-300 !text-5xl">Nice to meet you!</div>
        <div className="!text-4xl">I&apos;m Daria Usatyuk.</div>
      </div>
    </div>
  );
}
