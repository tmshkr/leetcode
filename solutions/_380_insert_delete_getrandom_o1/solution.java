package _380_insert_delete_getrandom_o1;

import java.util.*;

class RandomizedSet {

  private Set<Integer> set;

  public RandomizedSet() {
    this.set = new HashSet<>();
  }

  public boolean insert(int val) {
    if (this.set.contains(val)) {
      return false;
    }
    this.set.add(val);
    return true;
  }

  public boolean remove(int val) {
    if (!this.set.contains(val)) {
      return false;
    }
    this.set.remove(val);
    return true;
  }

  public int getRandom() {
    int index = new Random().nextInt(this.set.size());
    return (int) this.set.toArray()[index];
  }
}
/*
https://leetcode.com/problems/insert-delete-getrandom-o1/
*/
