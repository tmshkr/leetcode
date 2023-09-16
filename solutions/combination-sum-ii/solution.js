/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];
  const backtrack = (target, path = [], index = 0) => {
    if (target === 0) {
      res.push([...path]);
      return;
    }
    if (target <= 0) {
      return;
    }
    let prev = -1;

    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] === prev) {
        continue;
      }
      path.push(candidates[i]);
      backtrack(target - candidates[i], path, i + 1);
      path.pop();
      prev = candidates[i];
    }
  };

  backtrack(target);
  return res;
};

module.exports = { combinationSum2 };
