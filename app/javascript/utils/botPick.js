import takeCardBy from "./takeCardBy.js"

export default function botPick(pack, pickNo) {
  let packCopy = pack.slice(0);
  let maxRating = Math.max.apply(Math, packCopy.map(card => card.rating));
  return takeCardBy("rating", maxRating, pack);
}
