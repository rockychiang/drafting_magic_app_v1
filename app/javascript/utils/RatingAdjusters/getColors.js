export default function getColors(colorLimit, bot) {
  let colorCount = {w: 0, u: 0, b: 0, r: 0, g: 0}
  const colors = bot.map(card => card.colors).flat();
  const uniqColors = [...new Set(colors)];

  if (uniqColors.length <= colorLimit) {
    return uniqColors;
  } else {
    for (const color in colorCount) {
      colors.forEach(i => i == color && colorCount[color]++)
    }
  }
}
