export default function sortBy(category, cards) {
  let sortedCards
  switch (category) {
    case "name":
      sortedCards = cards.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      break;
    case "color":
      sortedCards = cards.sort((a, b) => {

      })
      break;
    case "cmc":
      sortedCards = cards.sort((a, b) => a.cmc - b.cmc)
      break;
    case "rarity":
      sortedCards
      break;
    default:
      sortedCards = cards.sort();
  }
  return sortedCards;
}
