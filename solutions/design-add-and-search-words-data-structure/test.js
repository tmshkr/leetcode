const { WordDictionary } = require("./code.js");

test(`case 1`, () => {
  const wordDictionary = new WordDictionary();
  wordDictionary.addWord("bad");
  wordDictionary.addWord("dad");
  wordDictionary.addWord("mad");
  expect(wordDictionary.search("pad")).toEqual(false);
  expect(wordDictionary.search("bad")).toEqual(true);
  expect(wordDictionary.search(".ad")).toEqual(true);
  expect(wordDictionary.search("b..")).toEqual(true);
});

test(`case 2`, () => {
  const wordDictionary = new WordDictionary();
  wordDictionary.addWord("a");
  wordDictionary.addWord("a");
  expect(wordDictionary.search(".")).toEqual(true);
  expect(wordDictionary.search("a")).toEqual(true);
  expect(wordDictionary.search("aa")).toEqual(false);
  expect(wordDictionary.search("a")).toEqual(true);
  expect(wordDictionary.search(".a")).toEqual(false);
  expect(wordDictionary.search("a.")).toEqual(false);
});
