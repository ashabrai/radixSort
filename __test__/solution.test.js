'use strict';

const radix = require('../src/solution');

const testArray1 = [2, 4, 8, 7, 6, 9];
const testArray2 = [1, 9, 18, 2, 35, 10];

describe('#solution.js', () => {
  test('test to see if id sort first array', () => {
    expect(radix.radixSort(testArray1)).toEqual([2, 4, 6, 7, 8, 9]);
  });
  test('test to see if 2nd array sort', () => {
    expect(radix.radixSort(testArray2)).toEqual([1, 2, 9, 10, 18, 35]);
  });
});

