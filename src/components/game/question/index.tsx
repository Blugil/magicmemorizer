"use client"

import { useState } from "react";
import Card from "../card";
import AnswerChoice from "./choices";

export default function Question({ answer, options }: any) {

  const [gameState, setGameState] = useState(
    {
      name: false,
      body: true,
      correct_answer: answer,
    }
  )

  return (
    <div className="z-10 w-full max-w-5xl flex items-center justify-around font-mono text-sm lg:text-xl text-black dark:text-white">
      <div className="z-10 max-w-5xl flex-col text-center items-center justify-around font-mono text-sm lg:text-xl text-black dark:text-white">
        <div className="flex items-center justify-around mb-4">
          <Card 
            url="https://cards.scryfall.io/large/front/2/1/21d92191-a743-4916-bbe4-5e207e964d9b.jpg?1562901760"
            top={gameState.name}
            body={gameState.body}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <AnswerChoice answer={answer} />
          <AnswerChoice answer={answer} />
          <AnswerChoice answer={answer} />
          <AnswerChoice answer={answer} />
        </div>
      </div>
    </div>
  )
}

