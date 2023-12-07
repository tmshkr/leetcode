/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
};

function mergeSort(arr, lo, hi) {
  if (lo >= hi) return;
  const mid = Math.floor((lo + hi) / 2);
  mergeSort(arr, lo, mid);
  mergeSort(arr, mid + 1, hi);
  merge(arr, lo, mid, hi);
}

function merge(arr, lo, mid, hi) {
  const temp = [];
  let l = lo;
  let r = mid + 1;

  while (l <= mid && r <= hi) {
    if (arr[l] <= arr[r]) {
      temp.push(arr[l]);
      l++;
    } else {
      temp.push(arr[r]);
      r++;
    }
  }

  while (l <= mid) {
    temp.push(arr[l]);
    l++;
  }

  while (r <= hi) {
    temp.push(arr[r]);
    r++;
  }

  for (let i = lo; i <= hi; i++) {
    arr[i] = temp[i - lo];
  }
}

module.exports = { sortArray };

/*
  https://leetcode.com/problems/sort-an-array/
  */
