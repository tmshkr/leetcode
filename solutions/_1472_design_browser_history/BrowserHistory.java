
package _1472_design_browser_history;

class BrowserHistory {
    ListNode cur;

    public BrowserHistory(String homepage) {
        this.cur = new ListNode(homepage);
    }

    public void visit(String url) {
        this.cur.next = new ListNode(url, this.cur);
        this.cur = this.cur.next;
    }

    public String back(int steps) {
        while (this.cur.prev != null && steps > 0) {
            this.cur = this.cur.prev;
            steps--;
        }
        return this.cur.val;
    }

    public String forward(int steps) {
        while (this.cur.next != null && steps > 0) {
            this.cur = this.cur.next;
            steps--;
        }
        return this.cur.val;
    }
}

/*
 * https://leetcode.com/problems/design-browser-history/
 */