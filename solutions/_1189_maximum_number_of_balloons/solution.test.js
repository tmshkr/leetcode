const { maxNumberOfBalloons } = require("./solution.js");

test(`"nlaebolko"`, () => {
  const inputs = ["nlaebolko"];
  const expected = 1;
  const actual = maxNumberOfBalloons(...inputs);
  expect(actual).toEqual(expected);
});

test(`"loonbalxballpoon"`, () => {
  const inputs = ["loonbalxballpoon"];
  const expected = 2;
  const actual = maxNumberOfBalloons(...inputs);
  expect(actual).toEqual(expected);
});

test(`"leetcode"`, () => {
  const inputs = ["leetcode"];
  const expected = 0;
  const actual = maxNumberOfBalloons(...inputs);
  expect(actual).toEqual(expected);
});
