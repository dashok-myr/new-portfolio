import Image from "next/image";
import github from "@/icons/icons8-github.svg";
import linkedin from "@/icons/icons8-linkedin.svg";
import instagram from "@/icons/icons8-instagram.svg";

export default function SocialMedias() {
  return (
    <div className="flex gap-5 left-96">
      <a
        target="_blank"
        href="https://github.com/dashok-myr"
        rel="noopener noreferrer"
      >
        <Image src={github} alt="github" width={30} height={30} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/dariausatyuk/"
        rel="noopener noreferrer"
      >
        <Image src={linkedin} alt="linkedin" width={30} height={30} />
      </a>
      <a target="_blank" href="https://www.instagram.com/dasha_torres/">
        <Image src={instagram} alt="instagram" width={30} height={30} />
      </a>
    </div>
  );
}
