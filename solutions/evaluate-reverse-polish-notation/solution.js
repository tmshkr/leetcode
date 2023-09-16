/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  let a, b;
  for (t of tokens) {
    switch (t) {
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "-":
        a = stack.pop();
        b = stack.pop();
        stack.push(b - a);
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "/":
        a = stack.pop();
        b = stack.pop();
        stack.push(Math.trunc(b / a));
        break;
      default:
        stack.push(Number(t));
    }
  }
  return stack[0];
};

module.exports = { evalRPN };

/*
https://leetcode.com/problems/evaluate-reverse-polish-notation/
*/
