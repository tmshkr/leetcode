/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let count = 0;
  let sum = 0;
  let i = 0;
  let j = 0;
  while (j < arr.length) {
    sum += arr[j];
    if (j - i + 1 == k) {
      if (sum / k >= threshold) {
        count++;
      }
      sum -= arr[i];
      i++;
    }
    j++;
  }
  return count;
};

module.exports = { numOfSubarrays };

/*
https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
*/
