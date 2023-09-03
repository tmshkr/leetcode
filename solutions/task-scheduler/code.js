const { MaxPriorityQueue } = require("datastructures-js");

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const counter = new Array(26).fill(0);
  for (const task of tasks) {
    const index = task.charCodeAt(0) - "A".charCodeAt(0);
    counter[index]++;
  }

  const maxFrequency = Math.max(...counter);
  const numTasks = counter.reduce((a, c) => {
    if (c === maxFrequency) a++;
    return a;
  }, 0);

  const interval = (maxFrequency - 1) * (n + 1) + numTasks;

  return Math.max(tasks.length, interval);
};

module.exports = { leastInterval };

/*
https://leetcode.com/problems/task-scheduler/
*/
