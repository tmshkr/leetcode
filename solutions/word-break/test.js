const { wordBreak } = require("./solution.js");

test(`"leetcode",["leet","code"]`, () => {
  expect(wordBreak("leetcode",["leet","code"])).toEqual(true);
});

test(`"applepenapple",["apple","pen"]`, () => {
  expect(wordBreak("applepenapple",["apple","pen"])).toEqual(true);
});

test(`"catsandog",["cats","dog","sand","and","cat"]`, () => {
  expect(wordBreak("catsandog",["cats","dog","sand","and","cat"])).toEqual(false);
});

