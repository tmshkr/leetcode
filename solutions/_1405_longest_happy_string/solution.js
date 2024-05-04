const { PriorityQueue } = require("datastructures-js");

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  const pq = new PriorityQueue((A, B) => B[0] - A[0]);
  for (const [count, char] of [
    [a, "a"],
    [b, "b"],
    [c, "c"],
  ]) {
    if (count > 0) {
      pq.enqueue([count, char]);
    }
  }

  const res = [];
  while (!pq.isEmpty()) {
    let [countA, charA] = pq.dequeue();
    if (
      res.length >= 2 &&
      res[res.length - 1] === charA &&
      res[res.length - 2] == charA
    ) {
      if (pq.isEmpty()) break;
      let [countB, charB] = pq.dequeue();
      res.push(charB);
      countB--;
      if (countB) {
        pq.enqueue([countB, charB]);
      }
    } else {
      res.push(charA);
      countA--;
    }
    if (countA) {
      pq.enqueue([countA, charA]);
    }
  }

  return res.join("");
};

module.exports = { longestDiverseString };

/*
https://leetcode.com/problems/longest-happy-string/
*/
