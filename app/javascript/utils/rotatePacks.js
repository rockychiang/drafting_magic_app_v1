export default function rotatePacks(packs, pickNo) {

}

function rotate(packs) {
  let pack = packs.shift();
  packs.splice(7, 0, pack);
}

function reverseRotate(packs) {
  let pack = packs.splice(7, 1);
  packs.unshift(pack);
}
