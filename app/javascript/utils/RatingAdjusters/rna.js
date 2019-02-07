export default function adjustRatingForGRN(bot, pack , block) {
  const pickNo = bot.length + 1;
  if (pickNo === 2) {
    const fpColor = bot[0].colors
    console.log(bot[0])
    if (fpColor.length === 1) {
      pack.filter(card => card.colors.includes(fpColor[0])).map(card => card.rating = card.rating + 0.2)
      console.log(pack)
    } else {
      pack.filter(card => card.colors == fpColor || card.colors == [fpColor[0]] || card.colors == [fpColor[1]])
        .map(card => card.rating = card.rating + 0.2)
      console.log(pack)
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
