package _1405_longest_happy_string;

import java.util.*;

class Solution {
    private class Tuple {
        public int count;
        public char ch;

        public Tuple(int count, char ch) {
            this.count = count;
            this.ch = ch;
        }
    }

    public String longestDiverseString(int a, int b, int c) {
        PriorityQueue<Tuple> pq = new PriorityQueue<>(
                (A, B) -> B.count - A.count);
        if (a > 0) {
            pq.add(new Tuple(a, 'a'));
        }
        if (b > 0) {
            pq.add(new Tuple(b, 'b'));
        }
        if (c > 0) {
            pq.add(new Tuple(c, 'c'));
        }

        StringBuilder res = new StringBuilder();

        while (!pq.isEmpty()) {
            Tuple A = pq.poll();
            if (res.length() >= 2 && res.charAt(res.length() - 1) == A.ch
                    && res.charAt(res.length() - 2) == A.ch) {
                if (pq.isEmpty())
                    break;
                Tuple B = pq.poll();
                res.append(B.ch);
                B.count--;
                if (B.count > 0) {
                    pq.add(B);
                }
            } else {
                res.append(A.ch);
                A.count--;
            }
            if (A.count > 0) {
                pq.add(A);
            }
        }

        return res.toString();
    }
}

/*
 * https://leetcode.com/problems/longest-happy-string/
 */