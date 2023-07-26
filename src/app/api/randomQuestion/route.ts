import { shuffle } from "@/util/shuffle";
import { NextResponse } from 'next/server'

export async function GET(request: Request) {

  let card_name: string;
  let card_image: string;

  const res_random = await fetch("https://api.scryfall.com/cards/random", { cache: 'no-store' })
  const card = await res_random.json()

  console.log(card);


  //const res_similar = await fetch(`https://api.scryfall.com/cards/search?q=${"tst"}`);
  //grab the color(s), and the type line
  //parse it into a query string
  //attach it to the api call
  //pick three random cards
  //create those options


  card_name = card.name;
  card_image = card.image_uris.png;

  console.log(card_image);

  const options = [card.name, "Option 2", "Option 3", "Option 4"]
  const shuffled_options = shuffle(options);
  const answer = shuffled_options.indexOf(card.name);
  const artURL = card_image;

  return NextResponse.json({
    options: shuffled_options,
    answer: shuffled_options[answer],
    artURL: artURL,
  })
}

