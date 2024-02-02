Array.prototype.top = function () {
  return this[this.length - 1];
};

Array.prototype.isEmpty = function () {
  return this.length === 0;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  const stack = [];
  let min = nums[0]; // [num, min]

  for (const num of nums) {
    while (!stack.isEmpty() && num >= stack.top()[0]) {
      stack.pop();
    }
    if (!stack.isEmpty() && num < stack.top()[0] && num > stack.top()[1]) {
      return true;
    }
    stack.push([num, min]);
    min = Math.min(num, min);
  }

  return false;
};


module.exports = { find132pattern };

/*
https://leetcode.com/problems/132-pattern/
*/
