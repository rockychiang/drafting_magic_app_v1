import takeCardBy from "./takeCardBy.js"
import adjustRatingForGRN from "./RatingAdjusters/grn.js"
import adjustRatingForRNA from "./RatingAdjusters/rna.js"

export default function botPick(bot, pack, block) {
  let packCopy = JSON.parse(JSON.stringify(pack));
  adjustRating(bot, packCopy, block);
  const maxRating = Math.max.apply(Math, packCopy.map(card => card.rating));
  const card = packCopy.filter(card => card.rating == maxRating)[0];
  console.log(bot, pack, card)
  return takeCardBy("name", card.name, pack);
}

function adjustRating(bot, pack, block) {
  const pickNo = bot.length + 1;
  if (pickNo === 1) {
    pack.filter(card => card.colors.length == 1).map(card => card.rating = card.rating + 0.1)
  } else {
    switch (block) {
      case "grn":
        adjustRatingForGRN(bot, pack, block);
        break;
      case "rna":
        adjustRatingForRNA(bot, pack, block);
        break;
      default:
    }
  }
}
