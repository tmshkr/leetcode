
package _707_design_linked_list;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
@Test
  @DisplayName("MyLinkedList")
  void MyLinkedListTest() {
    MyLinkedList myLinkedList = new MyLinkedList();
    
    myLinkedList.addAtHead(1);
    myLinkedList.addAtTail(3);
    myLinkedList.addAtIndex(1,2);
    assertEquals(myLinkedList.get(1), 2);
    myLinkedList.deleteAtIndex(1);
    assertEquals(myLinkedList.get(1), 3);
  }
}