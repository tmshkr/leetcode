/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();
  const getNext = (n) => {
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      n = Math.floor(n / 10);
      sum += digit ** 2;
    }
    return sum;
  };

  while (n !== 1) {
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    n = getNext(n);
  }
  return true;
};

module.exports = { isHappy };

/*
https://leetcode.com/problems/happy-number/
*/
