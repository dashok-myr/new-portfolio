import SocialMedia from "@/components/SocialMedia";
import MessageForm from "@/components/MessageForm";
import github from "@/icons/icons8-github-64.png";
import linkedin from "@/icons/icons8-linkedin-64.png";
import instagram from "@/icons/icons8-instagram-64.png";

export default function Footer() {
  return (
    <div className="text-white bg-black">
      <div className="flex flex-col md:flex w-[75%] m-auto py-16 md:py-24">
        <div className="flex flex-col basis-full">
          <div className="flex flex-col md:flex md:flex-row justify-between">
            <div className="flex flex-col h-72 w-72 md:w-96">
              <div className="text-6xl text-lime-300 font-semibold pb-10">
                Contact
              </div>
              <div className="text-gray-400">
                I would love to hear about your project nd how I could help.
                Please fill in the form, and I&apos;ll get back to you as soon
                as possible.
              </div>
            </div>
            <div className="flex flex-col h-72 w-72 md:w-96 text-zinc-400">
              <MessageForm />
            </div>
          </div>
          <div className="sm:block h-0.5 w-full bg-zinc-400"></div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:justify-between pt-5">
            <div className="text-3xl">dariaUSAtyuk</div>
            <div className="flex w-full justify-between md:justify-end items-end">
              <SocialMedia
                link="https://github.com/dashok-myr"
                image={github}
              />
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
        </div>
      </div>
    </div>
  );
}
