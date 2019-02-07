export default function adjustRatingForRNA(bot, pack , block) {
  const pickNo = bot.length + 1;
  if (pickNo === 2) {
    const fpColor = bot[0].colors
    console.log(bot[0])
    if (fpColor.length === 1) {
      pack.filter(card => card.colors.includes(fpColor[0])).map(card => card.rating = card.rating + 0.2)
    } else {
      let filtered = pack.filter(card => {
        return (
          ( card.colors.length == 1 && card.colors.includes(fpColor[0]) ) ||
          ( card.colors.length == 1 && card.colors.includes(fpColor[1]) ) ||
          ( card.colors.includes(fpColor[0]) && card.colors.includes(fpColor[1]) )
        )
      })
      filtered.map(card => card.rating = card.rating + 0.2)
    }
  } else if (pickNo > 2 && pickNo < 5) {

  } else {

  }
}

  // switch(fpColor[0]) {
  //   case "W":
  //     break;
  //   case "U":
  //     break;
  //   case "B":
  //     break;
  //   case "R":
  //     break;
  //   case "G":
  //     break;
  //   default:
  // }
