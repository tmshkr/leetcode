const { PriorityQueue } = require("datastructures-js");

/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function (servers, tasks) {
  const available = new PriorityQueue((a, b) => {
    return a[0] != b[0] ? a[0] - b[0] : a[1] - b[1];
  });
  const busy = new PriorityQueue((a, b) => {
    if (a[0] != b[0]) return a[0] - b[0]; // return the lesser time
    if (a[1] != b[1]) return a[1] - b[1]; // return the lesser weight
    return a[2] - b[2]; // return the lesser index
  });
  const res = [];
  for (let idx = 0; idx < servers.length; idx++) {
    const weight = servers[idx];
    available.enqueue([weight, idx]);
  }

  let time = 0;
  let j = 0;
  while (j < tasks.length) {
    time = Math.max(time, j);
    while (!busy.isEmpty() && busy.front()[0] <= time) {
      const [_, weight, idx] = busy.dequeue();
      available.enqueue([weight, idx]);
    }

    if (available.isEmpty()) {
      time = busy.front()[0];
    } else {
      const [weight, idx] = available.dequeue();
      busy.enqueue([time + tasks[j], weight, idx]);
      res.push(idx);
      j++;
    }
  }

  return res;
};

module.exports = { assignTasks };

/*
https://leetcode.com/problems/process-tasks-using-servers/
*/
