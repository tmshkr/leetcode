/**
 * @param {number} target
 * @param {number[]} positions
 * @param {number[]} speeds
 * @return {number}
 */
var carFleet = function (target, positions, speeds) {
  const stack = [];
  const pairs = positions.map((pos, i) => [pos, speeds[i]]);
  pairs.sort((a, b) => b[0] - a[0]);

  for (const [pos, speed] of pairs) {
    stack.push((target - pos) / speed);
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }
  return stack.length;
};

module.exports = { carFleet };

/*
https://leetcode.com/problems/car-fleet/
*/
