import useMobile from "@/useMobile";
import { TypeAnimation } from "react-type-animation";
import SocialMedia from "@/components/SocialMedia";
import Image from "next/image";
import me from "@/icons/me.jpg";
import Link from "next/link";
import github from "@/icons/icons8-github-64.png";
import linkedin from "@/icons/icons8-linkedin-64.png";
import instagram from "@/icons/icons8-instagram-64.png";

const WelcomeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Welcome!",
        1000,
        "Bienvenido!",
        1000,
        "欢迎",
        1000,
        "Willkommen!",
        1000,
        "Bienvenue!",
      ]}
      wrapper="span"
      speed={25}
      style={{ fontSize: "1.2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default function IntroductionDesktop() {
  const isMobile = useMobile();
  const yearsExperience = Math.max(0, new Date().getFullYear() - 2019);

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between">
      <div className="flex flex-col w-full text-start">
        <div className="text-gray-300 !text-8xl md:text-8xl text-start">
          {isMobile ? (
            <div className="sm:text-lg text-5xl">Welcome</div>
          ) : (
            <WelcomeAnimation />
          )}
        </div>
        <div className="text-gray-300 !text-7xl">Nice to meet you!</div>
        <div className="!text-xl md:!text-7xl text-center md:text-start">
          I&apos;m Daria Usatyuk.
        </div>
      </div>
      <div className="flex flex-col gap-6 self-end">
        <div className="flex justify-between">
          <div className="flex w-full justify-between items-end">
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
          <Image
            src={me}
            alt="me"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="font-bold text-3xl">With {yearsExperience}+ years of experience</div>
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
    </div>
  );
}
