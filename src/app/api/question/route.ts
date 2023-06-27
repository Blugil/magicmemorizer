import { shuffle } from "@/util/shuffle";
import { NextResponse } from 'next/server'

export async function GET(request: Request) {

  const options = ["Llanowar Calvary", "Option 2", "Option 3", "Option 4"]
  const shuffled_options = shuffle(options);
  const answer = shuffled_options.indexOf("Llanowar Calvary");
  const artURL = "https://cards.scryfall.io/large/front/2/1/21d92191-a743-4916-bbe4-5e207e964d9b.jpg?1562901760";

  return NextResponse.json({
    options: shuffled_options,
    answer: shuffled_options[answer],
    artURL: artURL,
  })
}

