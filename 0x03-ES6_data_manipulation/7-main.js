/* eslint-disable import/extensions */
import hasValuesFromArray from './7-has_array_values';

console.log(hasValuesFromArray([1, 2, 3, 4, 5], [1, 5]));
console.log(hasValuesFromArray([1, 2, 3, 4, 5], [1, 6]));
console.log(hasValuesFromArray([1, 2, 3, 4, 5], [1, 5, 4]));
console.log(hasValuesFromArray([1, 2, 3, 4, 5], []));
