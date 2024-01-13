package _881_boats_to_save_people;

import java.util.Arrays;

class Solution {

  public int numRescueBoats(int[] people, int limit) {
    Arrays.sort(people);
    int boats = 0;
    int i = 0;
    int j = people.length - 1;

    while (i <= j) {
      if (people[i] + people[j] <= limit) {
        i++;
      }
      j--;
      boats++;
    }

    return boats;
  }
}
/*
https://leetcode.com/problems/boats-to-save-people/
*/
