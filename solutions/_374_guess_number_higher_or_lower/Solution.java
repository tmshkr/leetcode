
package _374_guess_number_higher_or_lower;

public class Solution extends GuessGame {
    public Solution(int pick) {
        super(pick);
    }

    public int guessNumber(int n) {
        int lo = 1;
        int hi = n;

        while (true) {
            int mid = lo + (hi - lo) / 2;
            int myGuess = guess(mid);
            if (myGuess == 1)
                lo = mid + 1;
            else if (myGuess == -1)
                hi = mid - 1;
            else
                return mid;
        }
    }
}

/*
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 */