"use client"

import { useState } from "react";
import Card from "../card";
import AnswerChoice from "./choices";

interface gameState {
  name: boolean,
  body: boolean,
  correct_answer: string,
  answered_correctly: boolean | null
}

export default function Question({ answer, options }: any) {

    const [gameState, setGameState] = useState<gameState>(
      {
        name: false,
        body: true,
        correct_answer: answer,
        answered_correctly: null,
      }
    )

  const createOptions = (options: string[]): React.ReactElement[] => {
    let answerList: React.ReactElement[] = []
    options.forEach((option, index) => {
      answerList.push(
        <div key={index}>
          <AnswerChoice option={option} answer={answer} handleAnswer={handleAnswer}/>
        </div>
      )
    });

    return answerList
  }

  const handleAnswer = (correctAnswer: string) => {
    if (correctAnswer == answer) {
      setGameState({
        ...gameState, 
        answered_correctly: true
      })
      console.log("you were right!");
      return true;
    }
    setGameState({
      ...gameState, 
      answered_correctly: false
    })
    console.log("you were wrong ):");
    return false;
  }


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
          {createOptions(options)}
        </div>
      </div>
    </div>
  )
}

