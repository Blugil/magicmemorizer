"use client"

import { useState } from "react";
import Card from "../card";
import AnswerChoice from "./choices";
import { gameState } from "@/index";
import { getQuestion } from "..";
import delay from "@/util/delay";

export default function Question({ answer, options }: any) {

  const [gameState, setGameState] = useState<gameState>(
    {
      name: false,
      body: true,
      correct_answer: answer,
      options: options,
    }
  )

  const createOptions = (options: string[]): React.ReactElement[] => {
    let answerList: React.ReactElement[] = []
    options.forEach((option, index) => {
      answerList.push(
        <div key={index}>
          <AnswerChoice option={option} answer={gameState.correct_answer} handleAnswer={handleAnswer}/>
        </div>
      )
    });

    return answerList
  }

  //want clicking a button to mark the button as a certain color, then fetch for a new question, then repopulate question
  //current bugs: want the feedback to be instant to the button color change but a delay on the new queston
  //              button color persists even when a new question is fetched
  const handleAnswer = async (option: string, correctAnswer: string) => {

    const data = await getQuestion()
    const new_options = data?.options
    const new_answer = data?.answer

    setGameState({
      ...gameState, 
      correct_answer: new_answer,
      options: new_options,
    })

    return correctAnswer == option
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
          {createOptions(gameState.options)}
        </div>
      </div>
    </div>
  )
}

