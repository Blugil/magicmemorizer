"use client"

import { useState } from "react"

export default function AnswerChoice({option, answer, handleAnswer}: any) {

  const [backgroundColor, setBackgroundColor] = useState('bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-600 dark:hover:bg-zinc-400')
  
  return (
    <div className={`w-1/1 rounded-lg text-center lg:text-left text-sm hover:text-white dark:hover:text-black ${backgroundColor}`}>
      <button className="rounded-lg w-full md:w-64 h-auto p-2" onClick={async () => 
        {
          const result = await handleAnswer(option, answer)
          if (result) {
            setBackgroundColor("disabled bg-green-500 dark:bg-green-500 hover:bg-green-500 dark:hover:bg-green-500 text-black dark-text-black")
          }
          else {
            setBackgroundColor("disabled bg-red-500 dark:bg-red-500 hover:bg-red-500 dark:hover:bg-red-500 text-black dark:text-black")
          }
        }}
      >
        {option}
      </button>
    </div>
  )
}

