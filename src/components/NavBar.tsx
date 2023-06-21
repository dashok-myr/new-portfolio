import SocialMedias from "@/components/SocialMedias";

export default function NavBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full mt-5 md:mt-10">
      <div className="text-3xl mb-3">dariaUSAtyuk</div>
      <SocialMedias />
    </div>
  );
}
