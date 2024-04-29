const { PriorityQueue } = require("datastructures-js");

/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
  const n = tasks.length;
  tasks = tasks.map((task, i) => [...task, i]).sort((a, b) => a[0] - b[0]);
  const pq = new PriorityQueue((a, b) =>
    a[1] == b[1] ? a[2] - b[2] : a[1] - b[1]
  );

  const res = [];
  let time = 0;
  let i = 0;
  while (res.length < n) {
    while (i < n && tasks[i][0] <= time) {
      pq.enqueue(tasks[i]);
      i++;
    }
    if (pq.isEmpty()) {
      time = tasks[i][0];
    } else {
      const [_, duration, index] = pq.dequeue();
      res.push(index);
      time += duration;
    }
  }

  return res;
};

module.exports = { getOrder };

/*
https://leetcode.com/problems/single-threaded-cpu/
*/
