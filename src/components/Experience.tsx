import useIsMobile from "@/utils/useIsMobile";

const experiences = [
  {
    technology: "HTML",
    years: "4 years of experience",
  },
  {
    technology: "CSS",
    years: "4 years experience",
  },
  {
    technology: "JavaScript",
    years: "4 years experience",
  },
  {
    technology: "React",
    years: "4 years experience",
  },
  {
    technology: "TypeSript",
    years: "3 years experience",
  },
  {
    technology: "Python",
    years: "2 years experience",
  },
];

export default function Experience() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center text-center md:grid md:grid-cols-3 gap-5 md:gap-20">
      {isMobile && <span className="h-0.5 w-full bg-gray-200"></span>}
      {experiences.map((experience) => {
        return (
          <div key={experience.technology}>
            <div className="text-4xl">{experience.technology}</div>
            <div className="text-lg text-gray-400 pt-4">{experience.years}</div>
          </div>
        );
      })}
      {isMobile && <span className="h-0.5 w-full bg-gray-200 mt-5"></span>}
    </div>
  );
}
