/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let newMax = Math.max(arr[i], max);
    arr[i] = max;
    max = newMax;
  }

  return arr;
};

module.exports = { replaceElements };

/*
https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
*/

const result = replaceElements([17, 18, 5, 4, 6, 1]); // [18,6,6,6,1,-1]
console.log(result);
