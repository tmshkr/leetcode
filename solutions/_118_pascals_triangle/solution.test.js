const { generate } = require("./solution.js");

test(`5`, () => {
  const inputs = 5;
  const expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
  const actual = generate(inputs);
  expect(actual).toEqual(expected);
});

test(`1`, () => {
  const inputs = 1;
  const expected = [[1]];
  const actual = generate(inputs);
  expect(actual).toEqual(expected);
});
