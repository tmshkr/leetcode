
package _895_maximum_frequency_stack;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
@Test
  @DisplayName("FreqStack")
  void FreqStackTest() {
    FreqStack freqStack = new FreqStack();
    
    freqStack.push(5);
    freqStack.push(7);
    freqStack.push(5);
    freqStack.push(7);
    freqStack.push(4);
    freqStack.push(5);
    assertEquals(freqStack.pop(), 5);
    assertEquals(freqStack.pop(), 7);
    assertEquals(freqStack.pop(), 5);
    assertEquals(freqStack.pop(), 4);
  }
}