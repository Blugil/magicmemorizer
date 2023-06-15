import AnswerChoice from "./choices";

export default function AnswerSection({answer}: any) {
  
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <AnswerChoice answer={answer} />
      <AnswerChoice answer={answer} />
      <AnswerChoice answer={answer} />
      <AnswerChoice answer={answer} />
    </div>
  )
}

