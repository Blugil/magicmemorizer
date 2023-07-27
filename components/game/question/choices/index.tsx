"use client";

import { useContext, useEffect, useState } from "react";
import { GameContext, GameContextType } from "../../gameProvider";

export default function AnswerChoice({ option }: { option: string }) {
  const { answerQuestion, answered } = useContext(
    GameContext
  ) as GameContextType;

  const [backgroundColor, setBackgroundColor] = useState(
    "bg-zinc-300 dark:bg-zinc-800"
  );

  // Removes a red or green background once the next question is loaded
  useEffect(() => {
    if (!answered) setBackgroundColor("bg-zinc-300 dark:bg-zinc-800");
  }, [answered]);

  // Updates the background color after checking for correctness
  function handleClick() {
    if (answered) return;

    const correct = answerQuestion(option);

    if (correct) {
      setBackgroundColor("bg-green-500 ");
    } else {
      setBackgroundColor("bg-red-500 ");
    }
  }

  return (
    <button
      className={`text-center text-sm rounded-lg w-full md:w-64 h-auto p-2 enabled:hover:text-white dark:text-zinc-100 enabled:dark:hover:bg-zinc-700 ${backgroundColor}`}
      onClick={() => handleClick()}
      disabled={answered}
    >
      {option}
    </button>
  );
}
