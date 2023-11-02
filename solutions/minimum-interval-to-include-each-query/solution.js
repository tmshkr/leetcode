const { MinPriorityQueue } = require("datastructures-js");

/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function (intervals, queries) {
  intervals.sort((a, b) => a[0] - b[0]);
  res = {};
  let i = 0;

  const pq = new MinPriorityQueue((x) => x[0]);

  for (const q of [...queries].sort((a, b) => a - b)) {
    while (i < intervals.length && intervals[i][0] <= q) {
      const [l, r] = intervals[i];
      pq.enqueue([r - l + 1, r]);
      i++;
    }

    while (!pq.isEmpty() && pq.front()[1] < q) {
      pq.dequeue();
    }
    res[q] = pq.isEmpty() ? -1 : pq.front()[0];
  }

  return queries.map((q) => res[q]);
};

module.exports = { minInterval };

/*
https://leetcode.com/problems/minimum-interval-to-include-each-query/
*/
