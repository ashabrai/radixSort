'use strict';

const radix = module.exports = {};

radix.getDidget = (number, nth) => {
  let returnDig = 0;

  while (nth--) { // eslint-disable-line
    returnDig = number % 10;

    number = Math.floor((number - returnDig) / 10); // eslint-disable-line
  }
  return returnDig;
};

radix.radixSort = (array) => {
  const maxVal = Math.floor(Math.log10(Math.max(...array)));
  let buckets = [];
  let base = 0;

  for (let i = 0; i < maxVal + 1; i++) {
    buckets = [];
    let x;

    for (x = 0; x < array.length; x++) {
      const digit = radix.getDidget(array[x], i + 1);

      buckets[digit] = buckets[digit] || [];
      buckets[digit].push(array[x]);
    }
    base = 0;
    for (let j = 0; j < buckets.length; j++) {
      if (buckets[j] && buckets[j].length > 0) {
        for (x = 0; x < buckets[j].length; x++) {
          array[base++] = buckets[j][x]; // eslint-disable-line
        }
      }
    }
  }
  return array;
};
