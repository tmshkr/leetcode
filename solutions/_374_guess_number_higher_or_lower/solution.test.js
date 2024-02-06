
const { GuessGame } = require("./solution.js");


test(`10,6`, () => {
  const g = new GuessGame(6);
  const expected = 6;
  const actual = g.guessNumber(10);
  expect(actual).toEqual(expected);
});

test(`1,1`, () => {
  const g = new GuessGame(1);
  const expected = 1;
  const actual = g.guessNumber(1);
  expect(actual).toEqual(expected);
});

test(`2,1`, () => {
  const g = new GuessGame(1);
  const expected = 1;
  const actual = g.guessNumber(2);
  expect(actual).toEqual(expected);
});

