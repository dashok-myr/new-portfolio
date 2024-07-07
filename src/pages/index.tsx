import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import ProgrammingImages from "@/components/ProgrammingImages";
import Image from "next/image";
import arrow from "../icons/down.png";
import Footer from "@/components/Footer";
import useMobile from "@/useMobile";
import IntroductionDesktop from "@/components/IntroductionDesktop";
import IntroductionMobile from "@/components/IntroductionMobile";

export default function Home() {
  const isMobile = useMobile();

  return (
    <>
      <div className="h-screen w-screen">
        <NavBar />
        <div className="md:mt-40" />
        <div className="flex m-5 md:m-20">
          {isMobile ? <IntroductionMobile /> : <IntroductionDesktop />}
        </div>
        <div className="mt-10 md:mt-32" />
        <ProgrammingImages />
        <div className="mt-10 md:mt-44" />
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-gray-300 font-bold !text-4xl md:text-7xl text-center">
            Not just an engineer
          </div>
          <div className="font-bold !text-4xl md:text-5xl text-center">
            A Full Stack software engineer
          </div>
          <div className="text-gray-400 !text-xl md:text-lg text-center">
            Expertise in JavaScript, React, Next, TypeScript, Python, FireBase,
            MangoDB, SQL, NoSQL and ect
          </div>
          <div className="animate-bounce mt-12 md:mt-24">
            {isMobile ? (
              <Image src={arrow} alt="arrow" width={70} height={70} />
            ) : (
              <Image src={arrow} alt="arrow" width={120} height={120} />
            )}
          </div>
        </div>
        <div className="pt-10 mx-5 md:mx-32">
          <Projects />
        </div>
        <div className="mt-12 md:mt-52" />
        <Footer />
      </div>
    </>
  );
}
