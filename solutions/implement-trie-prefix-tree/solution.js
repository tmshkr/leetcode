class TrieNode {
  constructor() {
    this.children = new Array(26);
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(str) {
    let curr = this.root;
    for (const c of str) {
      const i = c.charCodeAt() - "a".charCodeAt();
      if (!curr.children[i]) {
        curr.children[i] = new TrieNode();
      }
      curr = curr.children[i];
    }
    curr.end = true;
  }

  search(str) {
    let curr = this.root;
    for (const c of str) {
      const i = c.charCodeAt() - "a".charCodeAt();
      if (!curr.children[i]) return false;
      curr = curr.children[i];
    }
    return curr.end;
  }

  startsWith(str) {
    let curr = this.root;
    for (const c of str) {
      const i = c.charCodeAt() - "a".charCodeAt();
      if (!curr.children[i]) return false;
      curr = curr.children[i];
    }
    return true;
  }
}

module.exports = { Trie };

/*
https://leetcode.com/problems/implement-trie-prefix-tree/
*/
