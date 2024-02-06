package _374_guess_number_higher_or_lower;

/**
 * Forward declaration of guess API.
 * 
 * @param num your guess
 * @return -1 if num is higher than the picked number
 *         1 if num is lower than the picked number
 *         otherwise return 0
 *         int guess(int num);
 */

public class GuessGame {
  int pick;

  public GuessGame(int pick) {
    this.pick = pick;
  }

  public int guess(int num) {
    if (num > pick) {
      return -1;
    } else if (num < pick) {
      return 1;
    } else {
      return 0;
    }
  }
}