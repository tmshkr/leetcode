/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const stack = []; // [temp, index]

  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i];
    while (stack.length && t > stack[stack.length - 1][0]) {
      const stackInd = stack.pop()[1];
      res[stackInd] = i - stackInd;
    }
    stack.push([t, i]);
  }

  return res;
};

module.exports = { dailyTemperatures };

/*
https://leetcode.com/problems/daily-temperatures/
*/
