export default function rotatePacks(packs, pickNo) {
  if ( pickNo === 15 || pickNo === 30 ) packs.splice(0, 8);
  if ( pickNo < 15 || pickNo > 30 ) rotate(packs);
  if ( pickNo > 15 && pickNo < 30 ) reverseRotate(packs);
}

function rotate(packs) {
  let pack = packs.shift();
  packs.splice(7, 0, pack);
}

function reverseRotate(packs) {
  let pack = packs.splice(7, 1);
  packs.unshift(pack[0]);
}
