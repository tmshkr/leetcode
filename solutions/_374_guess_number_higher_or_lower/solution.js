class GuessGame {
  constructor(pick) {
    this.pick = pick;
  }

  guess(num) {
    if (num > this.pick) {
      return -1;
    } else if (num < this.pick) {
      return 1;
    } else {
      return 0;
    }
  }


  /**
   * @param {number} n
   * @return {number}
   */
  guessNumber(n) {
    let lo = 1;
    let hi = n;

    while (true) {
      let mid = lo + (hi - lo) / 2;
      let myGuess = this.guess(mid);
      if (myGuess == 1)
        lo = mid + 1;
      else if (myGuess == -1)
        hi = mid - 1;
      else
        return mid;
    }
  }
}

module.exports = { GuessGame };

/*
https://leetcode.com/problems/guess-number-higher-or-lower/
*/
