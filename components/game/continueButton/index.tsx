import { useContext } from "react";
import { GameContext, GameContextType } from "../gameProvider";

export default function ContinueButton() {
  const { answered, nextQuestion } = useContext(GameContext) as GameContextType;

  return (
    <button
      onClick={() => nextQuestion()}
      className={
        answered
          ? "block mx-auto my-6 bg-blue-500 text-blue-100 text-base px-3 py-2 rounded-lg hover:bg-blue-400 hover:text-blue-50"
          : "hidden"
      }
    >
      continue
    </button>
  );
}
