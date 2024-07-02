import Image from "next/image";
import github from "@/icons/icons8-github-64.png";
import linkedin from "@/icons/icons8-linkedin-64.png";
import instagram from "@/icons/icons8-instagram-64.png";

export default function SocialMedias() {
  return (
    <div className="flex justify-between">
      <a target="_blank" href="https://github.com/dashok-myr">
        <Image src={github} alt="github" width={45} height={45} />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/dariausatyuk/">
        <Image src={linkedin} alt="linkedin" width={45} height={45} />
      </a>
      <a target="_blank" href="https://www.instagram.com/dasha_torres/">
        <Image src={instagram} alt="instagram" width={45} height={45} />
      </a>
    </div>
  );
}
