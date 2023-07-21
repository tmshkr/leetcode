const { generateParenthesis } = require("./code.js");

test(`3`, () => {
  expect(generateParenthesis(3)).toEqual(["((()))","(()())","(())()","()(())","()()()"]);
});

test(`1`, () => {
  expect(generateParenthesis(1)).toEqual(["()"]);
});

