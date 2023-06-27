"use client";

import { useContext, useEffect } from "react";
import { GameContext, GameContextType } from "./gameProvider";
import Question from "./question";
import ContinueButton from "./continueButton";

// import { shuffle } from "@/util/shuffle";
// import Question from "./question";
// import { useState } from "react";

// export async function getQuestion() {
//   const endpoint = process.env.DEPLOYED_LINK || "http://localhost:3000/api";
//   const data = await fetch(`${endpoint}/question`);
//   if (!data.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return data.json();
// }

export default function Game() {

  const { loading, 
          fetchQuestion
          } = useContext(GameContext) as GameContextType;

  useEffect(() => {
    fetchQuestion();
  }, [])

  return !loading ? (
    <>
      <Question />
      <ContinueButton />
    </>
  ) : (
    <div>
      Loading
    </div>
  )
}
