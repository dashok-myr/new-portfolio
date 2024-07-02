import SocialMedias from "@/components/SocialMedias";
import MessageForm from "@/components/MessageForm";

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
            <SocialMedias />
          </div>
        </div>
      </div>
    </div>
  );
}
