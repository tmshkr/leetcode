const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const pq = new MaxPriorityQueue();
  for (const stone of stones) {
    pq.enqueue(stone);
  }

  while (pq.size() > 1) {
    const y = pq.dequeue();
    const x = pq.dequeue();
    if (y != x) {
      pq.enqueue(y - x);
    }
  }

  return pq.isEmpty() ? 0 : pq.front();
};

module.exports = { lastStoneWeight };

/*
https://leetcode.com/problems/last-stone-weight/
*/
