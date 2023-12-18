/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  const map = {};
  let result = 0;

  for (const [width, height] of rectangles) {
    const ratio = width / height;
    if (map[ratio]) {
      result += map[ratio];
      map[ratio]++;
    } else {
      map[ratio] = 1;
    }
  }
  return result;
};

module.exports = { interchangeableRectangles };

/*
https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
*/
