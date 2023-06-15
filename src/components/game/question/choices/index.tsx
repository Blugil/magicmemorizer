export default function AnswerChoice({answer}: any) {
  
  return (
    <div className="w-1/1 rounded-lg text-center lg:text-left text-sm bg-zinc-300 hover:bg-zinc-600 hover:text-white dark:bg-zinc-800 dark:hover:bg-zinc-400 dark:hover:text-black ">
      <button className="rounded-lg w-full md:w-64 h-auto p-2">
        {answer}
      </button>
    </div>
  )
}

