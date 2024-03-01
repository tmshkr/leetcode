class ListNode {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class BrowserHistory {
  constructor(homepage) {
    this.cur = new ListNode(homepage);
  }

  visit(url) {
    this.cur.next = new ListNode(url, this.cur);
    this.cur = this.cur.next;
  }

  back(steps) {
    while (this.cur.prev && steps > 0) {
      this.cur = this.cur.prev;
      steps--;
    }
    return this.cur.val;
  }

  forward(steps) {
    while (this.cur.next && steps > 0) {
      this.cur = this.cur.next;
      steps--;
    }
    return this.cur.val;
  }
}

module.exports = { BrowserHistory };

/*
https://leetcode.com/problems/design-browser-history/
*/
