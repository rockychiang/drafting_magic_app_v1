export default function takeCardBy(category, value, pack) {
  let cardIndex = pack.findIndex(card => card[category] == value)
  let card = pack.splice(cardIndex, 1)
  return card
}
