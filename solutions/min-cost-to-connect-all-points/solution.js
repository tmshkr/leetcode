/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const n = points.length;
  const edges = []; // [[dist, p1, p2]]

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dist = manhattanDistance(points[i], points[j]);
      edges.push([dist, i, j]);
    }
  }

  edges.sort((a, b) => a[0] - b[0]);

  const parent = Array.from({ length: n }, (_, i) => i);
  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  let totalCost = 0;
  let numEdgesAdded = 0;

  for (const [dist, u, v] of edges) {
    const rootU = find(u);
    const rootV = find(v);

    if (rootU !== rootV) {
      totalCost += dist;
      parent[rootU] = rootV;
      numEdgesAdded++;
    }

    if (numEdgesAdded === n - 1) {
      break;
    }
  }

  return totalCost;
};

function manhattanDistance(p1, p2) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

module.exports = { minCostConnectPoints };

/*
https://leetcode.com/problems/min-cost-to-connect-all-points/
*/
