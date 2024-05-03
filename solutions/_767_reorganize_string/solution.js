const { PriorityQueue } = require("datastructures-js");

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const ctr = new Map();
  let maxFreq = 0;
  for (const ch of s) {
    const count = (ctr.get(ch) || 0) + 1;
    maxFreq = Math.max(maxFreq, count);
    ctr.set(ch, count);
  }
  if (maxFreq > (s.length + 1) / 2) {
    return "";
  }

  const res = [];
  const pq = new PriorityQueue((a, b) => b[1] - a[1]);
  for (const [ch, count] of ctr) {
    pq.enqueue([ch, count]);
  }

  while (pq.size() >= 2) {
    const a = pq.dequeue();
    const b = pq.dequeue();
    res.push(a[0], b[0]);
    if (--a[1] > 0) {
      pq.enqueue(a);
    }
    if (--b[1] > 0) {
      pq.enqueue(b);
    }
  }

  if (!pq.isEmpty()) {
    const [ch, count] = pq.dequeue();
    if (count > 1) {
      return "";
    }
    res.push(ch);
  }

  return res.join("");
};

module.exports = { reorganizeString };

/*
https://leetcode.com/problems/reorganize-string/
*/
