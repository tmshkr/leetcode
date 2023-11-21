const { lengthOfLastWord } = require("./solution.js");

test(`"Hello World"`, () => {
  expect(lengthOfLastWord("Hello World")).toEqual(5);
});

test(`"   fly me   to   the moon  "`, () => {
  expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
});

test(`"luffy is still joyboy"`, () => {
  expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
});

