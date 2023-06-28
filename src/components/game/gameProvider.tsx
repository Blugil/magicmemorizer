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
  fetchQuestion: Function;
  answered: boolean;
  loading: boolean;
}

export const GameContext = createContext<GameContextType | null>(null);

// Context Provider
type GameProviderProps = {
  children: ReactNode;
};

export default function GameProvider({ children }: GameProviderProps) {
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    name: false,
    body: true,
    answer: "",
    options: [],
    artURL: "",
  });

  const [answered, setAnswered] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);


  // Helper functions
  function answerQuestion(selection: string): boolean {
    setAnswered(true);
    return selection == currentQuestion.answer;
  }

  async function fetchQuestion() {
    const endpoint = process.env.DEPLOYED_LINK || "http://localhost:3000/api";
    fetch(`${endpoint}/question`, { cache: 'no-store' }).then((res) => {
      res.json().then((data) => {
        setCurrentQuestion({
          ...currentQuestion,
          answer: data.answer,
          options: data.options,
          artURL: data.artURL,
        });
        setLoading(false);
      });
    }).catch((err) => {
      console.error(err);
    })
  }

  async function nextQuestion() {
    setAnswered(false);
    await fetchQuestion();
  }

  return (
    <GameContext.Provider
      value={{
        currentQuestion,
        setCurrentQuestion,
        answerQuestion,
        nextQuestion,
        fetchQuestion,
        answered,
        loading,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
