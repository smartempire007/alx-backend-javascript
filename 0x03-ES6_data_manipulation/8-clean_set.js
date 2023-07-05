/* eslint-disable array-callback-return */
export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }
  return [...set]
    .filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startString.length))
    .join('-');
}
