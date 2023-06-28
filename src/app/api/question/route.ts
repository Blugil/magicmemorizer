import { shuffle } from "@/util/shuffle";
import { NextResponse } from 'next/server'

export async function GET(request: Request) {

  const endpoint = process.env.DEPLOYED_LINK || "http://localhost:3000/api";
  const res = await fetch(`${endpoint}/internal/randomCard`, { cache: 'no-store' });
  const card = await res.json()

  const options = [card.name, "Option 2", "Option 3", "Option 4"]
  const shuffled_options = shuffle(options);
  const answer = shuffled_options.indexOf(card.name);
  const artURL = card.image;

  return NextResponse.json({
    options: shuffled_options,
    answer: shuffled_options[answer],
    artURL: artURL,
  })
}

