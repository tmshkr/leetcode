/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [crs, pre] of prerequisites) {
    graph[crs].push(pre);
  }

  const res = [];
  const checking = new Set();
  const checked = new Set();

  function check(crs) {
    if (checking.has(crs)) return false;
    if (checked.has(crs)) return true;

    checking.add(crs);
    for (const pre of graph[crs]) {
      if (!check(pre)) {
        return false;
      }
    }

    checking.delete(crs);
    checked.add(crs);
    res.push(crs);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!check(i)) {
      return [];
    }
  }

  return res;
};

module.exports = { findOrder };

/*
https://leetcode.com/problems/course-schedule-ii/
*/
