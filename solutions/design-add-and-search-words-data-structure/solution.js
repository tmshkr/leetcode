class TrieNode {
  constructor() {
    this.children = {};
    this.word = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(str) {
    let curr = this.root;

    for (const char of str) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.word = true;
  }

  search(str) {
    function dfs(j, root) {
      let curr = root;
      for (let i = j; i < str.length; i++) {
        const char = str[i];
        if (char === ".") {
          for (const key in curr.children) {
            if (dfs(i + 1, curr.children[key])) {
              return true;
            }
          }
          return false;
        } else {
          if (!(char in curr.children)) {
            return false;
          }
          curr = curr.children[char];
        }
      }
      return curr.word;
    }
    return dfs(0, this.root);
  }
}

module.exports = { WordDictionary };
