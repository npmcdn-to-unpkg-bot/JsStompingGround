export function swap(items, a, b) {
  let temp = items[a];
  items[a] = items[b];
  items[b] = temp;
}

export default {
  swap,
}
