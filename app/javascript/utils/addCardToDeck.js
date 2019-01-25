export default function addCardToDeck(cardName, pack) {
  let cardIndex = pack.findIndex((card) => {return card.name === cardName})
  let card = pack.splice(cardIndex, 1)
  return card
}
