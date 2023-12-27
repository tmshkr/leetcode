package _1822_sign_of_the_product_of_an_array;

class Solution {

  public int arraySign(int[] nums) {
    int sign = 1;
    for (int num : nums) {
      if (num == 0) return 0;
      if (num < 0) sign *= -1;
    }
    return sign;
  }
}
/*
https://leetcode.com/problems/sign-of-the-product-of-an-array/
*/
