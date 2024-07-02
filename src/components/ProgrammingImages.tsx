import Marquee from "react-fast-marquee";
import Image from "next/image";
import firebase from "@/icons/programmingLabels/firebase.png";
import javascript from "@/icons/programmingLabels/javascript.png";
import typescript from "@/icons/programmingLabels/typeScropt.png";
import css from "@/icons/programmingLabels/css.png";
import python from "@/icons/programmingLabels/python.png";
import react from "@/icons/programmingLabels/react.png";
import mangodb from "@/icons/programmingLabels/mangodb.png";
import next from "@/icons/programmingLabels/next.png";
import html from "@/icons/programmingLabels/html.jpeg";
import stripe from "@/icons/programmingLabels/Stripe.png";
import nosql from "@/icons/programmingLabels/nosql.png";

export default function ProgrammingImages() {
  return (
    <Marquee speed={150} delay={0}>
      <div className="pr-16">
        <Image
          src={firebase}
          alt="github"
          width={200}
          height={45}
          className="rounded-xl h-28 object-cover"
        />
      </div>
      <div className="rounded-xl pr-8">
        <Image
          src={javascript}
          alt="javascript"
          width={200}
          height={50}
          className="rounded-xl h-28 object-cover"
        />
      </div>
      <div className="rounded-xl pr-8">
        <Image
          src={typescript}
          alt="typescript"
          width={200}
          height={45}
          className="rounded-xl"
        />
      </div>
      <div className="rounded-xl pr-8">
        <Image
          src={css}
          alt="css"
          width={200}
          height={45}
          className="rounded-xl h-28"
        />
      </div>
      <div className="rounded-xl pr-8">
        <Image
          src={python}
          alt="python"
          width={200}
          height={45}
          className="rounded-xl h-28"
        />
      </div>
      <div className="rounded-xl pr-8">
        <Image
          src={react}
          alt="react"
          width={200}
          height={45}
          className="rounded-xl h-28"
        />
      </div>
      <div className="rounded-xl pr-8">
        <Image
          src={nosql}
          alt="nosql"
          width={200}
          height={45}
          className="rounded-xl h-28"
        />
      </div>
      <div className="rounded-xl pr-8">
        <Image
          src={stripe}
          alt="sripe"
          width={200}
          height={45}
          className="rounded-xl h-28"
        />
      </div>
      <div className="rounded-xl pr-8">
        <Image
          src={html}
          alt="html"
          width={200}
          height={45}
          className="rounded-xl h-28"
        />
      </div>
      <div className="rounded-xl pr-8">
        <Image
          src={next}
          alt="next"
          width={200}
          height={45}
          className="rounded-xl h-28"
        />
      </div>
      <div className="rounded-xl pr-8">
        <Image
          src={mangodb}
          alt="mangodb"
          width={200}
          height={45}
          className="rounded-xl h-28"
        />
      </div>
      {/*<div className="rounded-xl pr-5">*/}
      {/*  <Image src={javascript} alt="github" width={200} height={45} />*/}
      {/*</div>*/}
      {/*<div className="rounded-xl pr-5">*/}
      {/*  <Image src={typescript} alt="github" width={200} height={45} />*/}
      {/*</div>*/}
      {/*<div className="rounded-xl pr-5">*/}
      {/*  <Image src={css} alt="github" width={200} height={45} />*/}
      {/*</div>*/}
      {/*<div className="rounded-xl pr-5">*/}
      {/*  <Image src={python} alt="github" width={200} height={45} />*/}
      {/*</div>*/}
      {/*<div className="rounded-xl pr-5">*/}
      {/*  <Image src={react} alt="github" width={200} height={45} />*/}
      {/*</div>*/}
    </Marquee>
  );
}
