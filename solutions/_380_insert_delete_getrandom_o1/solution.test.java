package _380_insert_delete_getrandom_o1;

import static org.hamcrest.CoreMatchers.hasItem;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("RandomizedSet")
  void RandomizedSetTest() {
    RandomizedSet randomizedSet = new RandomizedSet();

    assertEquals(randomizedSet.insert(1), true);
    assertEquals(randomizedSet.remove(2), false);
    assertEquals(randomizedSet.insert(2), true);
    assertEquals(randomizedSet.getRandom(), 2);
    List<Integer> values = Arrays.asList(1, 2);
    assertThat(values, hasItem(randomizedSet.getRandom()));
    assertEquals(randomizedSet.remove(1), true);
    assertEquals(randomizedSet.insert(2), false);
    assertEquals(randomizedSet.getRandom(), 2);
  }
}
