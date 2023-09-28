const { PriorityQueue } = require("datastructures-js");

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const N = grid.length;
  const visited = Array.from(grid, () => Array(N).fill(false));
  const pq = new PriorityQueue((a, b) => a[2] - b[2]);

  pq.enqueue([0, 0, grid[0][0]]);

  while (pq.size() > 0) {
    const [r, c, priority] = pq.dequeue();
    visited[r][c] = true;

    if (r === N - 1 && c === N - 1) {
      return priority;
    }

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr >= 0 && nc >= 0 && nr < N && nc < N && !visited[nr][nc]) {
        pq.enqueue([nr, nc, Math.max(priority, grid[nr][nc])]);
      }
    }
  }
};

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

module.exports = { swimInWater };

/*
https://leetcode.com/problems/swim-in-rising-water/
*/
