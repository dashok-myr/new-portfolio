import LinkInBio from "@/components/Projects/LinkInBio";
import Cocktail from "@/components/Projects/Cocktail";
import Matreshka from "@/components/Projects/Matreshka";
import TicTacToe from "@/components/Projects/TicTacToe";
import Countries from "@/components/Projects/Countries";
import Todo from "@/components/Projects/Todo";

export default function Projects() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4">
        <LinkInBio />
      </div>
      <div className="col-span-2">
        <Cocktail />
      </div>
      <div className="col-span-2">
        <Matreshka />
      </div>
      <div className="col-span-2">
        <TicTacToe />
      </div>
      <div className="col-span-1">
        <Countries />
      </div>
      <div className="col-span-1">
        <Todo />
      </div>
    </div>
  );
}
