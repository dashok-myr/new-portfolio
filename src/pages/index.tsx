import Image from "next/image";
import photo from "../icons/IMG_9620.png";
import NavBar from "@/components/NavBar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-[90%] md:w-[75%] text-white m-auto">
        <div className="relative w-full z-10">
          <NavBar />
        </div>
        <Image
          className="absolute w-72 md:w-1/3 right-14 md:right-44"
          src={photo}
          alt="photo"
          width={700}
          height={900}
        />
        <div className="relative mt-72 md:mt-28">
          <div className="text-4xl md:text-8xl text-center md:text-start">
            Nice to meet you!
          </div>
          <div className="text-4xl md:text-8xl text-center md:text-start">
            I&apos;m Daria Usatyuk.
          </div>
          <div className="max-w-md text-lg text-gray-400 mt-10 md:my-20 text-center md:text-start">
            Based in the US, I am a front-end developer passionate about
            building accessible web apps that users love.
          </div>
        </div>
        <span className="hidden sm:block h-0.5 w-full bg-gray-200 mt-28"></span>
        <div className="my-12">
          <Experience />
        </div>
        <div className="pt-10">
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
}
