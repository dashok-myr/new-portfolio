import me from "../icons/me.jpeg";
import Image from "next/image";
import Link from "next/link";
import SocialMedia from "@/components/SocialMedia";
import github from "@/icons/icons8-github-64.png";
import linkedin from "@/icons/icons8-linkedin-64.png";
import instagram from "@/icons/icons8-instagram-64.png";

export default function IntroductionMobile() {
  return (
    <div className="flex flex-col items-center justify-center w-screen mt-10">
      <Image src={me} alt="me" width={200} className="rounded-full" />
      <div className="flex flex-col mt-7">
        <div className="text-gray-300 !text-5xl">Nice to meet you!</div>
        <div className="!text-4xl">I&apos;m Daria Usatyuk.</div>
      </div>
      <div className="flex flex-col mt-6 gap-3">
        <div className="font-bold text-xl">With 4+ years of experience</div>
        <div className="text-gray-300 text-lg">
          Based in the US, I am a front-end developer passionate about building
          accessible web apps that users love.
        </div>
        <Link
          href="https://www.linkedin.com/in/dariausatyuk/"
          className="text-center font-bold text-white bg-lime-400 rounded-lg px-4 py-2 hover:bg-lime-300"
        >
          Check out my LinkedIn
        </Link>
      </div>
      <div className="flex w-full justify-between items-end mt-9">
        <SocialMedia link="https://github.com/dashok-myr" image={github} />
        <SocialMedia
          link="https://www.linkedin.com/in/dariausatyuk/"
          image={linkedin}
        />
        <SocialMedia
          link="https://www.instagram.com/daria_usatyuk/?igsh=MW1vZGplbTFjbzlibg%3D%3D&utm_source=qr"
          image={instagram}
        />
      </div>
    </div>
  );
}
