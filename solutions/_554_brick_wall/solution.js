/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const idx2gaps = new Map();
  let max = 0;

  for (const row of wall) {
    let idx = 0;
    for (let i = 0; i < row.length - 1; i++) {
      idx += row[i];
      idx2gaps.set(idx, (idx2gaps.get(idx) || 0) + 1);
      max = Math.max(max, idx2gaps.get(idx));
    }
  }
  return wall.length - max;
};

module.exports = { leastBricks };

/*
https://leetcode.com/problems/brick-wall/
*/
