const { MinPriorityQueue, MaxPriorityQueue } = require("datastructures-js");

/**
 * https://leetcode.com/problems/find-median-from-data-stream/
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
class MedianFinder {
  constructor() {
    this.maxHeap = new MaxPriorityQueue();
    this.minHeap = new MinPriorityQueue();
  }

  addNum(num) {
    const heap = this.getHeap(num);
    heap.enqueue(num);
    this.rebalance();
  }

  getHeap(num) {
    const { maxHeap, minHeap } = this;
    const isFirst = maxHeap.isEmpty();
    const isGreater = num <= this.top(maxHeap);
    return isFirst || isGreater ? maxHeap : minHeap;
  }

  rebalance() {
    const { maxHeap, minHeap } = this;

    if (minHeap.size() + 1 < maxHeap.size()) {
      minHeap.enqueue(maxHeap.dequeue());
    } else if (maxHeap.size() < minHeap.size()) {
      maxHeap.enqueue(minHeap.dequeue());
    }
  }

  findMedian() {
    const { maxHeap, minHeap } = this;

    return maxHeap.size() === minHeap.size()
      ? this.average(maxHeap, minHeap)
      : this.top(maxHeap);
  }

  average(maxHeap, minHeap) {
    return (this.top(maxHeap) + this.top(minHeap)) / 2;
  }

  top(heap) {
    return heap.front() || 0;
  }
}

module.exports = { MedianFinder };
