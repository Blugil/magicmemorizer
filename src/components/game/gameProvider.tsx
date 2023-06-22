"use client";

import { Question } from "@/index";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

// Create context
export interface GameContextType {
  currentQuestion: Question;
  setCurrentQuestion: Dispatch<SetStateAction<Question>>;
  answerQuestion: Function;
  nextQuestion: Function;
  answered: boolean;
}

export const GameContext = createContext<GameContextType | null>(null);

// Context Provider
type GameProviderProps = {
  children: ReactNode;
};

export default function GameProvider({ children }: GameProviderProps) {
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    name: false,
    body: false,
    answer: "one",
    options: ["one", "two", "three", "four"],
    artURL:
      "https://cards.scryfall.io/large/front/2/1/21d92191-a743-4916-bbe4-5e207e964d9b.jpg?1562901760",
  });

  const [answered, setAnswered] = useState<boolean>(false);

  // Helper functions
  function answerQuestion(selection: string): boolean {
    setAnswered(true);
    return selection == currentQuestion.answer;
  }

  function nextQuestion() {
    setAnswered(false);
    // Fetch the next question from some source here
    setCurrentQuestion({
      name: false,
      body: false,
      answer: "five",
      options: ["five", "six", "seven", "eight"],
      artURL:
        "https://cards.scryfall.io/large/front/2/1/21d92191-a743-4916-bbe4-5e207e964d9b.jpg?1562901760",
    });
  }

  return (
    <GameContext.Provider
      value={{
        currentQuestion,
        setCurrentQuestion,
        answerQuestion,
        nextQuestion,
        answered,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
