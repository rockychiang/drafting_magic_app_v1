export default function getColors(colorLimit, bot) {
  let colorCount =  [{color: "W", count: 0},
                    {color: "U", count: 0},
                    {color: "B", count: 0},
                    {color: "R", count: 0},
                    {color: "G", count: 0}];
  const colors = bot.map(card => card.colors).flat();
  const uniqColors = [...new Set(colors)];

  if (uniqColors.length <= colorLimit) {
    return uniqColors;
  } else {
    colors.forEach(mana => {
      let color = colorCount.filter(item => item.color === mana)[0]
      color.count = color.count + 1;
    })
    console.log(colorCount);
    // if ((countArray[0] - countArray[colorLimit]) < 2) {
    //   if ()
    // } else if ((countArray[colorLimit - 1] - countArray [colorLimit]) >= 2) {
    //
    // }
  }
}

// 2 > 3 by 2
// return the first 2 colors
// 1 > 2 by 2
// return the first color
// 1 == 4
// return all
//
// pick 1
// pick best card
//
// pick 2
// pick another bomb of different color or support 1st pick
//
// pick 3
// support first two pick
//
// pick 4
// support first 3 pick
//
// pick 5
// start deciding on a color
//
// pick 6
// start deciding on a color
//
// pick 7
// start deciding on a color
//
// pick 8+
// pick top 2 color and pick that guild
