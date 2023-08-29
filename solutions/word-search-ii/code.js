class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
    this.refs = 0;
  }

  addWord(word) {
    let cur = this;
    cur.refs++;

    for (const char of word) {
      if (!(char in cur.children)) {
        cur.children[char] = new TrieNode();
      }
      cur = cur.children[char];
      cur.refs++;
    }
    cur.isWord = true;
  }

  removeWord(word) {
    let cur = this;
    cur.refs--;

    for (const char of word) {
      if (char in cur.children) {
        cur = cur.children[char];
        cur.refs--;
      }
    }
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const root = new TrieNode();
  for (const w of words) {
    root.addWord(w);
  }

  const ROWS = board.length;
  const COLS = board[0].length;
  const res = new Set();
  const visit = new Set();

  function dfs(r, c, node, word) {
    if (
      !(r >= 0 && r < ROWS) ||
      !(c >= 0 && c < COLS) ||
      !(board[r][c] in node.children) ||
      node.children[board[r][c]].refs < 1 ||
      visit.has(JSON.stringify([r, c]))
    ) {
      return;
    }

    visit.add(JSON.stringify([r, c]));
    node = node.children[board[r][c]];
    word += board[r][c];

    if (node.isWord) {
      node.isWord = false;
      res.add(word);
      root.removeWord(word);
    }

    dfs(r + 1, c, node, word);
    dfs(r - 1, c, node, word);
    dfs(r, c + 1, node, word);
    dfs(r, c - 1, node, word);
    visit.delete(JSON.stringify([r, c]));
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      dfs(r, c, root, "");
    }
  }

  return Array.from(res);
};

module.exports = { findWords };

/*
https://leetcode.com/problems/word-search-ii/
*/
