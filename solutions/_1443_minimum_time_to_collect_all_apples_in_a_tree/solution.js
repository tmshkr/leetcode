/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  if (n <= 1) return 0;

  const graph = new Map();
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  const dfs = (node, prev) => {
    let res = 0;
    for (const neighbor of graph.get(node)) {
      if (neighbor === prev) continue;
      res += dfs(neighbor, node);
    }
    if ((res > 0 || hasApple[node]) && node != 0) {
      res += 2;
    }
    return res;
  };

  return Math.max(0, dfs(0));
};

module.exports = { minTime };

/*
https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/
*/
