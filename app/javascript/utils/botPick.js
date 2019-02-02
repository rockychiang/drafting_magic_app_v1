export default function botPick(bots, packs, pickNo) {
  bots.map((bot, i) => {
    let packCopy = packs[i].slice(0);
    let maxRating = Math.max.apply(Math, packCopy.map(card => card.rating));
    let cardIndex = packCopy.findIndex(card => card.rating == maxRating);
    let card = packs[i].splice(cardIndex, 1);
    bot = bot.concat(card);
    console.log(bot)
  })
}
