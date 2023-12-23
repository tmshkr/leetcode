/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const len = dominoes.length;
  const dom = dominoes.split("");
  const q = new FifoQueue();
  for (let i = 0; i < dom.length; i++) {
    if (dom[i] !== ".") q.enqueue([i, dom[i]]);
  }

  while (!q.isEmpty()) {
    const [i, d] = q.dequeue();

    if (d == "L" && i > 0 && dom[i - 1] == ".") {
      q.enqueue([i - 1, "L"]);
      dom[i - 1] = "L";
    } else if (d == "R") {
      if (i + 1 < len && dom[i + 1] == ".") {
        if (i + 2 < len && dom[i + 2] == "L") {
          q.dequeue();
        } else {
          q.enqueue([i + 1, "R"]);
          dom[i + 1] = "R";
        }
      }
    }
  }

  return dom.join("");
};

class Node {
  constructor(item, next) {
    this.item = item;
    this.next = next;
  }
}

class FifoQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(item) {
    const node = new Node(item, null);
    if (this.tail) this.tail.next = node;
    this.tail = node;
    if (!this.head) this.head = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) return null;
    const node = this.head;
    this.head = this.head.next;
    this.length--;
    return node.item;
  }

  isEmpty() {
    return this.length === 0;
  }
}

module.exports = { pushDominoes };

/*
https://leetcode.com/problems/push-dominoes/
*/
