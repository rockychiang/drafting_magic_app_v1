export default function filterByColor(color, pack) {
  let filteredPack
  switch (color.length) {
    case 1:
      filteredPack = pack.filter(card => {
        return (
          card.colors.includes(color[0])
        )
      });
      break;

    case 2:
      filteredPack = pack.filter(card => {
        return (
          (card.colors.length == 1 && card.colors.includes(color[0])) ||
          (card.colors.length == 1 && card.colors.includes(color[1])) ||
          (card.colors.includes(color[0]) && card.colors.includes(color[1]))
        )
      });
      break;

    case 3:
      filteredPack = pack.filter(card => {
        return (
          (card.colors.length == 1 && card.colors.includes(color[0])) ||
          (card.colors.length == 1 && card.colors.includes(color[1])) ||
          (card.colors.length == 1 && card.colors.includes(color[2])) ||
          (card.colors.length == 2 && (card.colors.includes(color[0]) && card.colors.includes(color[1]))) ||
          (card.colors.length == 2 && (card.colors.includes(color[0]) && card.colors.includes(color[2]))) ||
          (card.colors.length == 2 && (card.colors.includes(color[1]) && card.colors.includes(color[2]))) ||
          (card.colors.includes(color[0]) && card.colors.includes(color[1]) && card.colors.includes(color[2]))
        )
      });
      break;

    default:
      filteredPack = pack;
  }
  return filteredPack;
}
