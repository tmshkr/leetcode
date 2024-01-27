/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const s = [];
  for (let a of asteroids) {
    let top = s[s.length - 1];
    while (a < 0 && top > 0) {
      const sum = a + top;
      if (sum > 0) {
        // a explodes
        a = 0;
      } else if (sum < 0) {
        // top explodes
        s.pop();
      } else {
        // both explode
        a = 0;
        s.pop();
      }
      top = s[s.length - 1];
    }
    if (a) {
      s.push(a);
    }
  }

  return s;
};

module.exports = { asteroidCollision };

/*
https://leetcode.com/problems/asteroid-collision/
*/
