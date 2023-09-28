/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const graph = {};
  const distances = {};
  const visited = new Set();

  for (let i = 1; i <= n; i++) {
    graph[i] = [];
    distances[i] = Infinity;
  }

  for (let i = 0; i < times.length; i++) {
    const [from, to, weight] = times[i];
    graph[from].push({ to, weight });
  }

  distances[k] = 0;

  while (true) {
    let minDistance = Infinity;
    let minNode = null;

    for (let i = 1; i <= n; i++) {
      if (!visited.has(i) && distances[i] < minDistance) {
        minDistance = distances[i];
        minNode = i;
      }
    }

    if (minNode === null) break;

    visited.add(minNode);

    const edges = graph[minNode];

    for (let i = 0; i < edges.length; i++) {
      const { to, weight } = edges[i];
      distances[to] = Math.min(distances[to], distances[minNode] + weight);
    }
  }

  const maxDistance = Math.max(...Object.values(distances));
  return maxDistance === Infinity ? -1 : maxDistance;
};

module.exports = { networkDelayTime };

/*
https://leetcode.com/problems/network-delay-time/
*/
