
package _705_design_hashset;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
@Test
  @DisplayName("MyHashSet")
  void MyHashSetTest() {
    MyHashSet myHashSet = new MyHashSet();
    
    myHashSet.add(1);
    myHashSet.add(2);
    assertEquals(myHashSet.contains(1), true);
    assertEquals(myHashSet.contains(3), false);
    myHashSet.add(2);
    assertEquals(myHashSet.contains(2), true);
    myHashSet.remove(2);
    assertEquals(myHashSet.contains(2), false);
  }
}