export default function hasValuesFromArray(set, array) {
  for (const idx of array) {
    if (!set.has(idx)) {
      return false;
    }
  }
  return true;
}
