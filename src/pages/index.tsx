import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import ProgrammingImages from "@/components/ProgrammingImages";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import arrow from "../icons/down.png";
import me from "../icons/me.jpeg";
import SocialMedias from "@/components/SocialMedias";
import Footer from "@/components/Footer";

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
      style={{ fontSize: "1.5em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <NavBar />
        <div className="mt-40" />
        <div className="flex m-20">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col w-full">
              <div className="text-gray-300 !text-8xl md:text-8xl text-center md:text-start">
                <WelcomeAnimation />
              </div>
              <div className="text-gray-300 !text-8xl md:text-8xl text-center md:text-start">
                Nice to meet you!
              </div>
              <div className="!text-8xl md:text-8xl text-center md:text-start">
                I&apos;m Daria Usatyuk.
              </div>
            </div>
            <div className="flex flex-col gap-6 self-end">
              <div className="flex justify-between">
                <div className="flex w-full justify-between items-end">
                  <SocialMedias />
                </div>
                <Image
                  src={me}
                  alt="me"
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </div>
              <div className="font-bold text-3xl">
                With 4+ years of experience
              </div>
              <div className="text-gray-300 text-lg">
                Based in the US, I am a front-end developer passionate about
                building accessible web apps that users love.
              </div>
              <Link
                href="https://www.linkedin.com/in/dariausatyuk/"
                className="text-center font-bold text-white bg-lime-400 rounded-lg px-4 py-2 hover:bg-lime-300"
              >
                Check out my LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-32" />
        <ProgrammingImages />
        <div className="mt-44" />
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-gray-300 font-bold !text-7xl md:text-5xl text-center">
            Not just an engineer
          </div>
          <div className="font-bold !text-6xl md:text-5xl text-center">
            A Full Stack software engineer
          </div>
          <div className="text-gray-400 !text-xl md:text-lg text-center">
            Expertise in JavaScript, React, Next, TypeScript, Python, FireBase,
            MangoDB, SQL, NoSQL and ect
          </div>
          <div className="animate-bounce mt-24">
            <Image src={arrow} alt="arrow" width={120} height={120} />
          </div>
        </div>
        <div className="pt-10 mx-32">
          <Projects />
        </div>
        <div className="mt-52" />
        <Footer />
      </div>
    </>
  );
}
