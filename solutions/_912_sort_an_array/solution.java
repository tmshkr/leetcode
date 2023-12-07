package _912_sort_an_array;

import java.util.ArrayList;

class Solution {

  public int[] sortArray(int[] nums) {
    mergeSort(nums, 0, nums.length - 1);
    return nums;
  }

  public void mergeSort(int[] arr, int lo, int hi) {
    if (lo >= hi) return;

    int mid = (lo + hi) / 2;
    mergeSort(arr, lo, mid);
    mergeSort(arr, mid + 1, hi);
    merge(arr, lo, mid, hi);
  }

  public void merge(int[] arr, int lo, int mid, int hi) {
    ArrayList<Integer> temp = new ArrayList<>();
    int l = lo;
    int r = mid + 1;

    while (l <= mid && r <= hi) {
      if (arr[l] <= arr[r]) {
        temp.add(arr[l]);
        l++;
      } else {
        temp.add(arr[r]);
        r++;
      }
    }
    while (l <= mid) {
      temp.add(arr[l]);
      l++;
    }
    while (r <= hi) {
      temp.add(arr[r]);
      r++;
    }
    for (int i = lo; i <= hi; i++) {
      arr[i] = temp.get(i - lo);
    }
  }
}
/*
https://leetcode.com/problems/sort-an-array/
*/
