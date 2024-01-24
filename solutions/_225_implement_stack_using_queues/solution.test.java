
package _225_implement_stack_using_queues;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
  @Test
  @DisplayName("MyStack")
  void MyStackTest() {
    MyStack myStack = new MyStack();

    myStack.push(1);
    myStack.push(2);
    assertEquals(2, myStack.top());
    assertEquals(2, myStack.pop());
    assertEquals(false, myStack.empty());
  }
}