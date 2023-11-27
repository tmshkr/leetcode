/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] == 0 &&
      (i == 0 || flowerbed[i - 1] == 0) &&
      (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)
    ) {
      n--;
      if (n == 0) return true;
      flowerbed[i] = 1;
    }
  }
  return false;
};

module.exports = { canPlaceFlowers };

/*
https://leetcode.com/problems/can-place-flowers/
*/
