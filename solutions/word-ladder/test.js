const { ladderLength } = require("./solution.js");

test(`"hit","cog",["hot","dot","dog","lot","log","cog"]`, () => {
  expect(
    ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
  ).toEqual(5);
});

test(`"hit","cog",["hot","dot","dog","lot","log"]`, () => {
  expect(
    ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])
  ).toEqual(0);
});
