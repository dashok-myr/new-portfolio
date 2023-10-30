import Image, { StaticImageData } from "next/image";
import countries from "../icons/countries-project.png";
import matreshka from "../icons/matreshka-project.png";
import cocktail from "../icons/cocktail-project.png";
import todoList from "../icons/todoList.png";
import ticTacToe from '../icons/ticTacToe.png'
import linkInBio from '../icons/linkInBio.png'


interface IProject {
  image: string | StaticImageData;
  url: string;
  code: string;
  name: string;
  technologies: string;
}

const projects: IProject[] = [
  {
    image: ticTacToe,
    url: "https://tic-tac-toe-dusky-eight.vercel.app/",
    code: "https://github.com/dashok-myr/tic-tac-toe",
    name: "Tic Tac Toe",
    technologies: "CSS NextJS Tailwind",
  },
  {
    image: linkInBio,
    url: "https://link-in-bio-lemon.vercel.app/",
    code: "https://github.com/dashok-myr/Link-In-Bio",
    name: "Link In Bio",
    technologies: "React Firebase Tailwind",
  },
  {
    image: cocktail,
    url: "https://cocktails-ten.vercel.app/",
    code: "https://github.com/dashok-myr/cocktails",
    name: "Cocktail recipe",
    technologies: "CSS NextJS Tailwind",
  },
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
    image: todoList,
    url: "https://todo-list-eta-seven-31.vercel.app/?vercelToolbarCode=M7jWuS37FSzsZCE",
    code: "https://github.com/dashok-myr/todo/tree/main/src/app",
    name: "Todo List",
    technologies: "CSS NextJS Tailwind",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col">
      <div className="text-5xl md:text-6xl pb-10 md:pb-16">Projects</div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-20">
        {projects.map((project) => {
          return (
            <div key={project.name} className="flex flex-col">
              <div>
                <Image src={project.image} alt="project" />
                <div className="text-xl text-gray-100 pt-3">
                  {project.name.toUpperCase()}
                </div>
                <div className="text-sm font-light text-gray-400">
                  {project.technologies}
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <a
                  href={project.url}
                  target="_blank"
                  className="text-md font-medium uppercase leading-normal text-green-300 transition duration-150 ease-in-out hover:text-white"
                >
                  VIEW PROJECT
                </a>
                <a
                  target="_blank"
                  href={project.code}
                  className="text-md font-medium uppercase leading-normal text-green-300 transition duration-150 ease-in-out hover:text-white mb-10"
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
