import { shuffle } from "@/util/shuffle";
import { NextResponse } from 'next/server'

export async function GET(request: Request) {

  let card_name: string;
  let card_image: string;

  const res = await fetch("https://api.scryfall.com/cards/random", { cache: 'no-store' })
  const card = await res.json()

  card_name = card.name;
  card_image = card.image_uris.png;

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

