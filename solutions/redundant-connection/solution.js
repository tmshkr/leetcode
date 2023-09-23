/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const par = Array.from({ length: edges.length + 1 }, (_, i) => i);
  const rank = Array.from({ length: edges.length + 1 }, () => 1);

  const find = (n) => {
    let p = par[n];
    while (p != par[p]) {
      par[p] = par[par[p]];
      p = par[p];
    }
    return p;
  };

  const union = (a, b) => {
    const pa = find(a);
    const pb = find(b);

    if (pa === pb) return false;

    if (rank[pa] > rank[pb]) {
      par[pb] = pa;
      rank[pa] += rank[pb];
    } else {
      par[pa] = pb;
      rank[pb] += rank[pa];
    }

    return true;
  };

  for (const [a, b] of edges) {
    if (!union(a, b)) return [a, b];
  }
};

module.exports = { findRedundantConnection };

/*
https://leetcode.com/problems/redundant-connection/
*/
