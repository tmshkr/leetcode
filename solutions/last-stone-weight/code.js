const { MaxPriorityQueue } = require("datastructures-js");

/**
 * https://leetcode.com/problems/last-stone-weight/
 * Time O(N * log(N)) | Space O(N)
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxHeap = new MaxPriorityQueue();
  for (const stone of stones) {
    maxHeap.enqueue(stone);
  }

  while (maxHeap.size() > 1) {
    const [x, y] = [maxHeap.dequeue(), maxHeap.dequeue()];
    const diff = x - y;
    if (diff > 0) maxHeap.enqueue(diff);
  }

  return maxHeap.isEmpty() ? 0 : maxHeap.front();
};

module.exports = { lastStoneWeight };
