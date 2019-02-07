export default function adjustRatingBy(adjustment, color, pack) {
  let filtered;
  switch (color.length) {
    case 1:
      filtered = pack.filter(card => {
        return (
          card.colors.includes(color[0])
        )
      });
      break;

    case 2:
      filtered = pack.filter(card => {
        return (
          (card.colors.length == 1 && card.colors.includes(color[0])) ||
          (card.colors.length == 1 && card.colors.includes(color[1])) ||
          (card.colors.includes(color[0]) && card.colors.includes(color[1]))
        )
      });
      break;

    case 3:
      filtered = pack.filter(card => {
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

  }
  filtered.map(card => card.rating = card.rating + adjustment);
}
