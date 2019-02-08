import filterByColor from "./filterByColor.js"

export default function adjustRatingBy(adjustment, color, pack) {
  let filteredPack = filterByColor(color, pack);
  filteredPack.map(card => card.rating = card.rating + adjustment);
}
