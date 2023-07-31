/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let A = nums1;
  let B = nums2;
  const total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);

  if (B.length < A.length) {
    [A, B] = [B, A];
  }

  let l = 0;
  let r = A.length - 1;

  while (true) {
    const i = Math.floor((l + r) / 2);
    const j = half - i - 2;

    const Aleft = i >= 0 ? A[i] : -Infinity;
    const Aright = i + 1 < A.length ? A[i + 1] : Infinity;
    const Bleft = j >= 0 ? B[j] : -Infinity;
    const Bright = j + 1 < B.length ? B[j + 1] : Infinity;

    if (Aleft <= Bright && Bleft <= Aright) {
      return total % 2 === 0
        ? (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
        : Math.min(Aright, Bright);
    } else if (Aleft > Bright) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
};

module.exports = { findMedianSortedArrays };

/*
https://leetcode.com/problems/median-of-two-sorted-arrays/
*/
