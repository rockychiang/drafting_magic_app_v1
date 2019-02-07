export default function getColors(colorLimit, bot) {
  let colorCount = { W: 0, U: 0, B: 0, R: 0, G: 0 };
  const colors = bot.map(card => card.colors).flat();
  const uniqColors = [...new Set(colors)];

  if (uniqColors.length <= colorLimit) {
    return uniqColors;
  } else {
    for (const color in colorCount) {
      colors.forEach(i => {
        if (i === color) { colorCount[color] = colorCount[color] + 1 }
      });
    }
  }
}
