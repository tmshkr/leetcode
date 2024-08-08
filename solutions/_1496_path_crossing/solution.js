/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let x = 0;
  let y = 0;
  const visited = new Set();
  visited.add(`${x},${y}`);

  for (const step of path) {
    switch (step) {
      case "N":
        y++;
        break;
      case "S":
        y--;
        break;
      case "E":
        x++;
        break;
      case "W":
        x--;
        break;
    }

    const key = `${x},${y}`;
    if (visited.has(key)) {
      return true;
    }
    visited.add(key);
  }

  return false;
};

module.exports = { isPathCrossing };

/*
https://leetcode.com/problems/path-crossing/
*/
