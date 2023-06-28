"use client";

import { useContext, useEffect } from "react";
import { GameContext, GameContextType } from "./gameProvider";
import Question from "./question";
import ContinueButton from "./continueButton";


export default function Game() {

  const { loading, 
          fetchQuestion
          } = useContext(GameContext) as GameContextType;

  useEffect(() => {
    fetchQuestion();
  }, [])

  return !loading ? (
    <>
      Name this random card!
      <Question />
      <ContinueButton />
    </>
  ) : (
    <div>
      Loading
    </div>
  )
}
