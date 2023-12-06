
package _706_design_hashmap;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
@Test
  @DisplayName("MyHashMap")
  void MyHashMapTest() {
    MyHashMap myHashMap = new MyHashMap();
    
    myHashMap.put(1,1);
    myHashMap.put(2,2);
    assertEquals(myHashMap.get(1), 1);
    assertEquals(myHashMap.get(3), -1);
    myHashMap.put(2,1);
    assertEquals(myHashMap.get(2), 1);
    myHashMap.remove(2);
    assertEquals(myHashMap.get(2), -1);
  }
}