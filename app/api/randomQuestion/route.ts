import { shuffle } from '@/util/shuffle'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {

  // gets a random card from scryfall
  const res_random = await fetch("https://api.scryfall.com/cards/random", { cache: 'no-store' })
  if (res_random.status == 429) {
    return NextResponse.error()
  }

  const card = await res_random.json()
  let card_typeline: string = card.type_line;

  // starts creating the query string for matching cards
  let query_string: string = "q="
  query_string = query_string + `type:${card_typeline.split(" ")[0].toLowerCase()}`

  if (card.color_identity && card.color_identity.length > 0) {
    let color_string: string = "color:";
    card.color_identity.forEach((color: string) => {
      color_string = color_string + color;
    });
    query_string = query_string + "+" + color_string;
  }
  else {
    query_string = query_string + `+cmc:${card.cmc}`;
  }

  const res_options = await fetch(`https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&order=review&page=1&${encodeURI(query_string)}`, { cache: 'no-store' })

  const test_options = await res_options.json()
  const card_options = test_options.data;


  let random_card_options = [];
  while(random_card_options.length < 3){
      let r = Math.floor(Math.random() * card_options.length) + 1;
      if(random_card_options.indexOf(r) === -1) random_card_options.push(r);
  }

  const options = [card.name, card_options[random_card_options[0]].name, card_options[random_card_options[1]].name, card_options[random_card_options[2]].name];
  const shuffled_options = shuffle(options);
  const answer = shuffled_options.indexOf(card.name);
  const artURL = card.image_uris.png;

  return NextResponse.json({
    options: shuffled_options,
    answer: shuffled_options[answer],
    artURL: artURL,
  })
}

