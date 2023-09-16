/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [];

  for (let i = 0; i < heights.length; i++) {
    const h = heights[i];
    let start = i;
    while (stack.length && stack[stack.length - 1][1] > h) {
      const [index, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }
    stack.push([start, h]);
  }

  for (const [i, h] of stack) {
    maxArea = Math.max(maxArea, h * (heights.length - i));
  }

  return maxArea;
};

module.exports = { largestRectangleArea };

/*
https://leetcode.com/problems/largest-rectangle-in-histogram/
*/
