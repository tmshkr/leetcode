/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let start = 0;
  let tank = 0;
  let totalGas = 0;

  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];
    tank += diff;
    totalGas += diff;

    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return totalGas >= 0 ? start : -1;
};

module.exports = { canCompleteCircuit };

/*
https://leetcode.com/problems/gas-station/
*/
