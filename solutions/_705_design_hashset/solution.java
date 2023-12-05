package _705_design_hashset;

import java.util.HashSet;

class MyHashSet {

  private HashSet<Integer> _set;

  public MyHashSet() {
    _set = new HashSet<Integer>();
  }

  public void add(int key) {
    _set.add(key);
  }

  public void remove(int key) {
    _set.remove(key);
  }

  public boolean contains(int key) {
    return _set.contains(key);
  }
}
/*
https://leetcode.com/problems/design-hashset/
*/
