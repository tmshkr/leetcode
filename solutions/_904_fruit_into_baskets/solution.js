/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  const count = new Map();
  let l = 0;
  let res = 0;

  for (let r = 0; r < fruits.length; r++) {
    const fruit = fruits[r];
    count.set(fruit, count.get(fruit) + 1 || 1);
    while (count.size > 2) {
      const lastFruit = fruits[l];
      count.set(lastFruit, count.get(lastFruit) - 1);
      if (count.get(lastFruit) === 0) {
        count.delete(lastFruit);
      }
      l++;
    }
    res = Math.max(res, r - l + 1);
  }

  return res;
};

module.exports = { totalFruit };

/*
https://leetcode.com/problems/fruit-into-baskets/
*/
