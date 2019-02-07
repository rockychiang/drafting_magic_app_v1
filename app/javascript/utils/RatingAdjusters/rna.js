import adjustRatingBy from "./adjustRatingBy.js"

export default function adjustRatingForRNA(bot, pack, block) {
  const pickNo = bot.length + 1;
  if (pickNo === 2) {
    const fpColor = bot[0].colors
    adjustRatingBy(0.2, fpColor, pack);
  } else if (pickNo > 2 && pickNo < 5) {
    const colors = bot.map(card => card.colors).flat();
    const uniqColors = [...new Set(colors)];
    // let filtered = pack.filter(card => {
    //   return (
    //
    //   )
    // })
  } else {

  }
}

// 2 different guilds that share no color 4 4
//   pick card that supports either guilds
// 1 guild and 1 mono-color that doesn't share color 3 3
//   pick card that supports either cards
// 2 different guilds that share a color 4 3
//   pick card that includes that color
// 2 mono-color of different colors that doesn't support a guild 2 2
//   pick card that supports either color
// 1 guild and 1 mono-color or 2 cards of the same guild 2/3/4 2
//   pick card that supports that guild
// 2 mono-color of the same color 2 1
//   pick card that supports that color

// 2 different guilds that share no color 5/6 4
//   pick card that supports either guilds
// 1 guild and 1 mono-color that doesn't share color 4/5 3 or 5 4
//   pick card that supports either cards
// 2 different guilds that share a color 5/6 3
//   pick card that includes that color
// 1 guild and 1 mono-color or 2 cards of the same guild 4/5/6 2
//   pick card that supports that guild
// 3 mono-color 3 1
//   pick card that supports that color

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
