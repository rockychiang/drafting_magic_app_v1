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
        if (a.colors.includes("W") && a.colors.length === 1 && !b.colors.includes("W") || b.colors.length !== 1) return -1;
        if (b.colors.includes("W") && b.colors.length === 1 && !a.colors.includes("W") || a.colors.length !== 1) return 1;
        if (a.colors.includes("U") && a.colors.length === 1 && !b.colors.includes("U") || b.colors.length !== 1) return -1;
        if (b.colors.includes("U") && b.colors.length === 1 && !a.colors.includes("U") || a.colors.length !== 1) return 1;
        if (a.colors.includes("B") && a.colors.length === 1 && !b.colors.includes("B") || b.colors.length !== 1) return -1;
        if (b.colors.includes("B") && b.colors.length === 1 && !a.colors.includes("B") || a.colors.length !== 1) return 1;
        if (a.colors.includes("R") && a.colors.length === 1 && !b.colors.includes("R") || b.colors.length !== 1) return -1;
        if (b.colors.includes("R") && b.colors.length === 1 && !a.colors.includes("R") || a.colors.length !== 1) return 1;
        if (a.colors.includes("G") && a.colors.length === 1 && !b.colors.includes("G") || b.colors.length !== 1) return -1;
        if (b.colors.includes("G") && b.colors.length === 1 && !a.colors.includes("G") || a.colors.length !== 1) return 1;
        if (a.colors.includes("W") && !b.colors.includes("W")) return -1;
        if (b.colors.includes("W") && !a.colors.includes("W")) return 1;
        if (a.colors.includes("U") && !b.colors.includes("U")) return -1;
        if (b.colors.includes("U") && !a.colors.includes("U")) return 1;
        if (a.colors.includes("B") && !b.colors.includes("B")) return -1;
        if (b.colors.includes("B") && !a.colors.includes("B")) return 1;
        if (a.colors.includes("R") && !b.colors.includes("R")) return -1;
        if (b.colors.includes("R") && !a.colors.includes("R")) return 1;
        if (a.colors.includes("G") && !b.colors.includes("G")) return -1;
        if (b.colors.includes("G") && !a.colors.includes("G")) return 1;
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
      break;
    case "cmc":
      sortedCards = cards.sort((a, b) => a.cmc - b.cmc)
      break;
    case "rarity":
      sortedCards = cards.sort((a, b) => {
        if (a.rarity === "Mythic" && b.rarity !== "Mythic") return -1;
        if (a.rarity !== "Mythic" && b.rarity === "Mythic") return 1;
        if (a.rarity === "Rare" && b.rarity !== "Rare") return -1;
        if (a.rarity !== "Rare" && b.rarity === "Rare") return 1;
        if (a.rarity === "Uncommon" && b.rarity !== "Uncommon") return -1;
        if (a.rarity !== "Uncommon" && b.rarity === "Uncommon") return 1;
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
      break;
    default:
      sortedCards = cards.sort();
  }
  return sortedCards;
}
