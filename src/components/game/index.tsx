"use client";

import { useContext } from "react";
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
  //const endpoint = process.env.DEPLOYED_LINK || "http://localhost:3000/api"

  // const data = await getQuestion();
  // console.log(data);

  // const shuffled_options = data?.options;
  // const answer = data?.answer;

  // return <Question answer={answer} options={shuffled_options} />;
  return (
    <>
      <Question />
      <ContinueButton />
    </>
  );
}
