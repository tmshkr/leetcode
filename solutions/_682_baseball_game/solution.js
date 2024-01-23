/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const scores = [];
  let i = 0;

  for (const op of operations) {
    switch (op) {
      case "+":
        scores[i] = scores[i - 1] + scores[i - 2];
        i++;
        break;
      case "D":
        scores[i] = scores[i - 1] * 2;
        i++;
        break;
      case "C":
        i--;
        break;
      default:
        scores[i] = Number(op);
        i++;
        break;
    }
  }

  let sum = 0;
  for (let j = 0; j < i; j++) {
    sum += scores[j];
  }
  return sum;
};

module.exports = { calPoints };

/*
https://leetcode.com/problems/baseball-game/
*/
