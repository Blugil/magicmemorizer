"use client";

import { useContext } from "react";
import Card from "../card";
import AnswerChoice from "./choices";
import { GameContext, GameContextType } from "../gameProvider";

export default function Question() {
  const { currentQuestion } = useContext(GameContext) as GameContextType;

  return (
    <div className="z-10 w-full max-w-5xl flex items-center justify-around font-mono text-sm lg:text-xl text-black dark:text-white">
      <div className="z-10 max-w-5xl flex-col text-center items-center justify-around font-mono text-sm lg:text-xl text-black dark:text-white">
        <div className="flex items-center justify-around mb-4">
          <Card />
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => {
            return <AnswerChoice key={index} option={option} />;
          })}
        </div>
      </div>
    </div>
  );
}
