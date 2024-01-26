/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let i = 0;

  for (const val of pushed) {
    stack.push(val);
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }

  return stack.length === 0;
};

module.exports = { validateStackSequences };

/*
https://leetcode.com/problems/validate-stack-sequences/
*/
