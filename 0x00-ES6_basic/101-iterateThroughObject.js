export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const [index, item] of Object.entries(reportWithIterator)) {
    result += `${item}`;

    if (index !== Object.keys(reportWithIterator).length - 1) {
      result += ' | ';
    }
  }
  return result;
}
