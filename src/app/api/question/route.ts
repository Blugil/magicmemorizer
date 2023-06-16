import { shuffle } from "@/util/shuffle";
import { NextResponse } from 'next/server'

export async function GET(request: Request) {

  const options = ["Llanowar Calvary", "Option 2", "Option 3", "Option 4"]
  const shuffled_options = shuffle(options);
  const answer = shuffled_options.indexOf("Llanowar Calvary");

  return NextResponse.json({
    options: shuffled_options,
    answer: shuffled_options[answer]
  })
}

