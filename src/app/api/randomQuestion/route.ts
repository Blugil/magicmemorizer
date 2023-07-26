import { shuffle } from "@/util/shuffle";
import { NextResponse } from 'next/server'

export async function GET(request: Request) {

  let query_string: string = "?q="

  let card_name: string;
  let card_image: string;

  const res_random = await fetch("https://api.scryfall.com/cards/random", { cache: 'no-store' })
  if (res_random.status == 429) {
    return NextResponse.error()
  }

  const card = await res_random.json()

  //console.log(card);

  let card_typeline: string = card.type_line;


  query_string = query_string + `type:${card_typeline.split(" ")[0].toLowerCase()}`

  if (card.color_identity) {
    let color_string: string = "color:";
    card.color_identity.forEach((color: string) => {
      color_string = color_string + color;
    });
    query_string = query_string + "+" + color_string;
  }
  else {
    query_string = query_string + `+cmc:${card.cmc}`;
  }

  console.log(query_string);

  //const res_similar = await fetch(`https://api.scryfall.com/cards/search?q=${"tst"}`);
  //grab the color(s), and the type line
  //parse it into a query string
  //attach it to the api call
  //pick three random cards
  //create those options
  //
  const res_options = await fetch(`https://api.scryfall.com/cards/search${encodeURI(query_string)}`, { cache: 'no-store' })

  const test_options = await res_options.json()
  console.log(test_options.total_cards);

  const card_options = test_options.data;



  card_name = card.name;
  card_image = card.image_uris.png;

  //console.log(card_image);

  const options = [card.name, card_options[0].name, card_options[1].name, card_options[2].name];
  const shuffled_options = shuffle(options);
  const answer = shuffled_options.indexOf(card.name);
  const artURL = card_image;

  return NextResponse.json({
    options: shuffled_options,
    answer: shuffled_options[answer],
    artURL: artURL,
  })
}

