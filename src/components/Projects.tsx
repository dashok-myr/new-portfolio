import Image, { StaticImageData } from "next/image";
import countries from "../icons/countries-project.png";
import matreshka from "../icons/matreshka-project.png";
import cocktail from "../icons/cocktail-project.png";

interface IProject {
  image: string | StaticImageData;
  url: string;
  code: string;
  name: string;
  technologies: string;
}

const projects: IProject[] = [
  {
    image: matreshka,
    url: "https://matreshka-shop.vercel.app/",
    code: "https://github.com/dashok-myr/matreshka-shop",
    name: "Clothing e-commerce store",
    technologies: "CSS React Tailwind",
  },
  {
    image: countries,
    url: "https://countries-l2i3gsldg-dashok-myr.vercel.app/",
    code: "https://github.com/dashok-myr/countries",
    name: "Countries",
    technologies: "CSS NextJS Tailwind",
  },
  {
    image: cocktail,
    url: "https://cocktails-ten.vercel.app/",
    code: "https://github.com/dashok-myr/cocktails",
    name: "Cocktail recipe",
    technologies: "CSS NextJS Tailwind",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col">
      <div className="text-5xl md:text-6xl pb-10 md:pb-16">Projects</div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10">
        {projects.map((project) => {
          return (
            <div key={project.name} className="flex flex-col">
              <div>
                <Image src={project.image} alt="project" />
                <div className="text-xl text-gray-300 pt-3">
                  {project.name.toUpperCase()}
                </div>
                <div className="text-sm font-light text-gray-400">
                  {project.technologies.toUpperCase()}
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <a
                  href={project.url}
                  target="_blank"
                  className="underline text-md font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:text-green-300"
                >
                  VIEW PROJECT
                </a>
                <a
                  target="_blank"
                  href={project.code}
                  className="underline text-md font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:text-green-300 mb-10"
                >
                  VIEW CODE
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
