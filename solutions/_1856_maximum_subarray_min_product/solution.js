/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
  const prefix = Array(nums.length + 1).fill(0);
  const stack = [];
  let res = BigInt(0);

  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  for (let i = 0; i <= nums.length; i++) {
    const num = i < nums.length ? nums[i] : 0;

    while (stack.length && nums[stack.at(-1)] > num) {
      const min = BigInt(nums[stack.pop()]);
      const last = stack.length ? stack.at(-1) + 1 : 0;
      const sum = BigInt(prefix[i] - prefix[last]);
      const product = min * sum;
      if (product > res) {
        res = product;
      }
    }
    stack.push(i);
  }
  return res % BigInt(10 ** 9 + 7);
};

module.exports = { maxSumMinProduct };

/*
https://leetcode.com/problems/maximum-subarray-min-product/
*/
