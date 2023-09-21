/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const visited = new Set();
  const visiting = new Set();

  for (const [crs, pre] of prerequisites) {
    graph[crs].push(pre);
  }

  function isCyclic(crs) {
    if (visited.has(crs)) return false;
    if (visiting.has(crs)) return true;

    visiting.add(crs);

    for (const pre of graph[crs]) {
      if (isCyclic(pre)) {
        return true;
      }
    }

    visiting.delete(crs);
    visited.add(crs);
    return false;
  }

  for (let crs = 0; crs < numCourses; crs++) {
    if (isCyclic(crs)) {
      return false;
    }
  }

  return true;
};

module.exports = { canFinish };

/*
https://leetcode.com/problems/course-schedule/
*/
