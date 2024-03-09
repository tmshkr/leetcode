
package _622_design_circular_queue;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
@Test
  @DisplayName("MyCircularQueue")
  void MyCircularQueueTest() {
    MyCircularQueue myCircularQueue = new MyCircularQueue(3);
    
    assertEquals(myCircularQueue.enQueue(1), true);
    assertEquals(myCircularQueue.enQueue(2), true);
    assertEquals(myCircularQueue.enQueue(3), true);
    assertEquals(myCircularQueue.enQueue(4), false);
    assertEquals(myCircularQueue.Rear(), 3);
    assertEquals(myCircularQueue.isFull(), true);
    assertEquals(myCircularQueue.deQueue(), true);
    assertEquals(myCircularQueue.enQueue(4), true);
    assertEquals(myCircularQueue.Rear(), 4);
  }
}