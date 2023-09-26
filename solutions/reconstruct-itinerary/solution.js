/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const graph = {};
  for (let [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }
  for (let from in graph) {
    graph[from].sort();
  }
  const path = [];
  const dfs = (from) => {
    const adj = graph[from];
    while (adj && adj.length) {
      dfs(adj.shift());
    }
    path.push(from);
  };

  dfs("JFK");
  return path.reverse();
};

module.exports = { findItinerary };

/*
https://leetcode.com/problems/reconstruct-itinerary/
*/
