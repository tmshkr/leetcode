
package _219_contains_duplicate_ii;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {


  @Test
  @DisplayName("[1,2,3,1],3")
  void containsNearbyDuplicate0() {
    Solution s = new Solution();
    int[] nums = {1,2,3,1};
    int k = 3;
    boolean expected = true;
    boolean actual = s.containsNearbyDuplicate(nums, k);
    assertEquals(expected, actual);
  }
  
  @Test
  @DisplayName("[1,0,1,1],1")
  void containsNearbyDuplicate1() {
    Solution s = new Solution();
    int[] nums = {1,0,1,1};
    int k = 1;
    boolean expected = true;
    boolean actual = s.containsNearbyDuplicate(nums, k);
    assertEquals(expected, actual);
  }
  
  @Test
  @DisplayName("[1,2,3,1,2,3],2")
  void containsNearbyDuplicate2() {
    Solution s = new Solution();
    int[] nums = {1,2,3,1,2,3};
    int k = 2;
    boolean expected = false;
    boolean actual = s.containsNearbyDuplicate(nums, k);
    assertEquals(expected, actual);
  }
  
}