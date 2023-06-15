import Card from "./card";
import AnswerSection from "./question";

export default function Question({ answer }: any) {
  return (
    <div className="z-10 w-full max-w-5xl flex items-center justify-around font-mono text-sm lg:text-xl text-black dark:text-white">
      <div className="z-10 max-w-5xl flex-col text-center items-center justify-around font-mono text-sm lg:text-xl text-black dark:text-white">
        <div className="flex items-center justify-around mb-4">
          <Card 
            url="https://cards.scryfall.io/large/front/2/1/21d92191-a743-4916-bbe4-5e207e964d9b.jpg?1562901760"
            />
        </div>
        <AnswerSection answer={answer} />
      </div>
    </div>
  )
}

