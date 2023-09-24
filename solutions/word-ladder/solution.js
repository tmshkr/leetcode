/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }

  const wordSet = new Set(wordList);
  const queue = [[beginWord, 1]];

  while (queue.length) {
    const [word, level] = queue.shift();

    if (word === endWord) {
      return level;
    }

    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < 26; j++) {
        const newWord =
          word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);

        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
};

module.exports = { ladderLength };

/*
https://leetcode.com/problems/word-ladder/
*/
