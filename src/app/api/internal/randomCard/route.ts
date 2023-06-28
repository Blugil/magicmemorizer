import { NextResponse } from 'next/server'

export async function GET(request: Request) {

  let card_name: string;
  let card_image: string;

  const res = await fetch("https://api.scryfall.com/cards/random", { cache: 'no-store' })
  const card = await res.json()

  card_name = card.name;
  card_image = card.image_uris.png;
  
  return NextResponse.json({
    name: card_name,
    image: card_image,
  })
}

