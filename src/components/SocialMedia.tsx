import Image, { StaticImageData } from "next/image";
import github from "@/icons/icons8-github-64.png";
import linkedin from "@/icons/icons8-linkedin-64.png";
import instagram from "@/icons/icons8-instagram-64.png";

interface ISocialMedia {
  link: string;
  image: string | StaticImageData;
}
export default function SocialMedia({ link, image }: ISocialMedia) {
  return (
    <a target="_blank" href={link}>
      <Image src={image} alt="github" width={45} height={45} />
    </a>
  );
}
