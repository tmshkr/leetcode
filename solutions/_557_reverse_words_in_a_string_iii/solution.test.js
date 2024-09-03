const { reverseWords } = require("./solution.js");

test(`"Let's take LeetCode contest"`, () => {
  const inputs = ["Let's take LeetCode contest"];
  const expected = "s'teL ekat edoCteeL tsetnoc";
  const actual = reverseWords(...inputs);
  expect(actual).toEqual(expected);
});

test(`"Mr Ding"`, () => {
  const inputs = ["Mr Ding"];
  const expected = "rM gniD";
  const actual = reverseWords(...inputs);
  expect(actual).toEqual(expected);
});
