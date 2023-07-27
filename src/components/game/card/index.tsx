"use client";

import { useContext } from "react";
import { GameContext, GameContextType } from "../gameProvider";

export default function Card() {
  const { currentQuestion } = useContext(GameContext) as GameContextType;

  return (
    <div className="rounded-xl w-64 h-96 flex items-center relative overflow-hidden">
      <div
        className={`absolute w-full h-12 blur-sm top-3.5 backdrop-blur rounded-xl ${
          currentQuestion.name ? "hidden" : "block"
        }`}
      ></div>
      <img
        src={currentQuestion.artURL}
        alt="magic card"
        className="w-auto h-auto rounded-xl"
      />
      <div
        className={`absolute w-full h-40 blur-sm bottom-3.5 backdrop-blur rounded-xl ${
          currentQuestion.body ? "hidden" : "block"
        }`}
      ></div>
    </div>
  );
}
