/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  if (matchsticks.length < 4) {
    return false;
  }
  const perimeter = matchsticks.reduce((acc, curr) => acc + curr, 0);
  if (perimeter % 4 !== 0) {
    return false;
  }
  const side = perimeter / 4;
  matchsticks.sort((a, b) => b - a);
  const sides = [0, 0, 0, 0];
  return dfs(0);

  function dfs(i) {
    if (i === matchsticks.length) {
      return (
        sides[0] === side &&
        sides[1] === side &&
        sides[2] === side &&
        sides[3] === side
      );
    }

    for (let j = 0; j < 4; j++) {
      if (sides[j] + matchsticks[i] <= side) {
        sides[j] += matchsticks[i];
        if (dfs(i + 1)) {
          return true;
        }
        sides[j] -= matchsticks[i];
      }
    }
    return false;
  }
};

module.exports = { makesquare };

/*
https://leetcode.com/problems/matchsticks-to-square/
*/
