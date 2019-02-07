import takeCardBy from "./takeCardBy.js"

export default function botPick(bot, pack) {
  let packCopy = pack.slice(0);
  adjustRating(bot, packCopy);
  let maxRating = Math.max.apply(Math, packCopy.map(card => card.rating));
  return takeCardBy("rating", maxRating, pack);
}

function adjustRating(bot, pack) {
  const pickNo = bot.length + 1;
  if (pickNo < 3) {
    console.log(typeof pack[0].rating)
    pack.filter(card => card.colors.length == 1).map(card => card.rating = card.rating + 0.1)
    console.log(pack)
  } else if (pickNo > 3 && pickNo < 7) {

  } else {

  }
}
