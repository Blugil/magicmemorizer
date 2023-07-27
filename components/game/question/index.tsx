"use client";

import { useContext, useState } from "react";
import Card from "../card";
import AnswerChoice from "./choices";
import { GameContext, GameContextType } from "../gameProvider";
import delay from "../../../util/delay";

export default function Question() {
  const { currentQuestion, fade } = useContext(GameContext) as GameContextType;


  return (
    <div className="z-10 w-full max-w-5xl flex items-center justify-around font-mono text-sm lg:text-xl text-black dark:text-white">
      <div className={`transition-all duration-200 ${fade ? "opacity-100" : "opacity-0"}`}>
        <div className="z-10 max-w-5xl flex-col text-center items-center justify-around font-mono text-sm lg:text-xl text-black dark:text-white">
          <div className="flex items-center justify-around mb-4">
            <Card />
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            {currentQuestion.options.map((option: string, index: number) => {
              return <AnswerChoice key={index} option={option} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
