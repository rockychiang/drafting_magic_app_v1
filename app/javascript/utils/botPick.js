export default function botPick(pack, pickNo) {
  let packCopy = pack.slice(0);
  let maxRating = Math.max.apply(Math, packCopy.map(card => card.rating));
  let cardIndex = packCopy.findIndex(card => card.rating == maxRating);
  let card = pack.splice(cardIndex, 1);
  return card;
}
