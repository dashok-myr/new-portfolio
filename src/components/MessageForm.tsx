import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function MessageForm() {
  const form = useRef<HTMLFormElement>(null);

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current!, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label className="block mb-2 text-sm font-medium text-white">Email</label>
      <input
        className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        type="email"
        name="user_email"
        id="email"
        placeholder="name@gmail.com"
        required
      />
      <label className="block mb-2 text-sm font-medium text-white">
        Message
      </label>
      <textarea
        className="text-sm rounded-lg block w-full p-2 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-zinc-500 focus:border-zinc-500"
        name="message"
      />
      <input
        className="mt-5 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-800"
        type="submit"
        value="Send"
      />
    </form>
  );
}
