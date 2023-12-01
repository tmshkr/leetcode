class NumArray {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.sums = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      this.sums.push(sum);
    }
  }

  sumRange(l, r) {
    return this.sums[r] - (this.sums[l - 1] || 0);
  }
}

module.exports = { NumArray };

/*
https://leetcode.com/problems/range-sum-query-immutable/
*/
