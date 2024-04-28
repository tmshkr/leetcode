const { MinPriorityQueue } = require("datastructures-js");

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (A, B, k) {
  let total = 0;
  let res = 0;
  const pairs = Array.from({ length: A.length }, (_, i) => [A[i], B[i]]);
  pairs.sort((a, b) => b[1] - a[1]);

  const pq = new MinPriorityQueue();
  for (const [a, b] of pairs) {
    pq.enqueue(a);
    total += a;
    if (pq.size() === k) {
      res = Math.max(res, total * b);
      total -= pq.dequeue();
    }
  }

  return res;
};

module.exports = { maxScore };

/*
https://leetcode.com/problems/maximum-subsequence-score/
*/
