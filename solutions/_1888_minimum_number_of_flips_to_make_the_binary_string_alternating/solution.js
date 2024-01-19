/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
    const n = s.length;
    let count0 = 0;
    let count1 = 0;
    let res = 0;

    for (let i = 0; i < n; i++) {
        s[i] == i % 2 ? count1 += 1 : count0 += 1;
    }

    res = Math.min(count0, count1);

    for (let i = 0; i < n; i++) {
        s[i] == (n + i) % 2 ? count1 += 1 : count0 += 1;
        s[i] == i % 2 ? count1 -= 1 : count0 -= 1;
        res = Math.min(res, count0, count1);
    }
    return res;
};

module.exports = { minFlips };

/*
https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/
*/
