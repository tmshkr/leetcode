
package _682_baseball_game;

class Solution {
    public int calPoints(String[] operations) {
        int[] scores = new int[operations.length];
        int i = 0;
        for (String op : operations) {
            switch (op) {
                case "+":
                    scores[i] = scores[i - 1] + scores[i - 2];
                    i++;
                    break;
                case "D":
                    scores[i] = scores[i - 1] * 2;
                    i++;
                    break;
                case "C":
                    i--;
                    break;
                default:
                    scores[i] = Integer.parseInt(op);
                    i++;
                    break;
            }
        }
        int sum = 0;
        for (int j = 0; j < i; j++) {
            sum += scores[j];
        }
        return sum;
    }
}

/*
 * https://leetcode.com/problems/baseball-game/
 */