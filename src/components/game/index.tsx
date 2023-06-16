import { shuffle } from "@/util/shuffle";
import Question from "./question";
import { useState } from "react";

export class GameObject {
  options: string[];
  answer: string;
  constructor(options: string[], answer: string) {
    this.options = options;
    this.answer = answer;
  }
}

export default async function Game() {

  const endpoint = process.env.DEPLOYED_LINK || "http://localhost:3000/api"

  async function getQuestion() {
    const data = await fetch(`${endpoint}/question`)
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
    return data.json()
  }
  
  const data = await getQuestion()

  const shuffled_options = data?.options
  const answer = data?.answer
  
  //console.log(shuffled_options, answer);



  return (
    <Question answer={answer} options={shuffled_options} />
  )
}

