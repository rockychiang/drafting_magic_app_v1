import takeCardBy from "./takeCardBy.js"
import filterByColor from "./RatingAdjusters/filterByColor.js"
import adjustRatingForGRN from "./RatingAdjusters/grn.js"
import adjustRatingForRNA from "./RatingAdjusters/rna.js"

export default function botPick(bot, pack, block) {
  const pickNo = bot.length + 1;
  let packCopy = JSON.parse(JSON.stringify(pack));
  adjustRating(bot, packCopy, block, pickNo);
  const card = pickBestCard(packCopy, bot, pickNo)
  console.log(bot, pack, card)
  return takeCardBy("name", card.name, pack);
}

function adjustRating(bot, pack, block, pickNo) {
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

function pickBestCard(pack, bot, pickNo) {
  let bestCard;
  pack.sort((card1, card2) => card2.rating - card1.rating);

  if (pickNo === 1) {
    bestCard = pack[0];
  } else if (pickNo === 2) {
    let filteredPack = filterByColor(bot[0].colors, pack).filter(card => card.rating >= 3)

    if (bot[0].rating >= 4) {
      bestCard = filteredPack.length > 0 ? filteredPack[0] : pack[0]
    } else {
      if (pack[0].rating >= 4) {
        bestCard = pack[0];
      } else {
        bestCard = filteredPack.length > 0 ? filteredPack[0] : pack[0]
      }
    }
  } else {
    bestCard = pack[0];
  }

  return bestCard;
}
