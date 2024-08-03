/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  return words.reduce((acc, word) => {
    for (const ch of word) {
      if (count(word, ch) > count(chars, ch)) {
        return acc;
      }
    }
    return acc + word.length;
  }, 0);
};

function count(word, ch) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == ch) {
      count++;
    }
  }
  return count;
}

module.exports = { countCharacters };

/*
https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
*/
