package _49_group_anagrams;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

    private List<List<String>> normalize(List<List<String>> groups) {
        List<List<String>> sortedGroups = new ArrayList<>();
        for (List<String> group : groups) {
            List<String> sortedGroup = new ArrayList<>(group);
            Collections.sort(sortedGroup);
            sortedGroups.add(sortedGroup);
        }
        sortedGroups.sort(Comparator.comparing(group -> String.join(",", group)));
        return sortedGroups;
    }

    @Test
    @DisplayName("['eat','tea','tan','ate','nat','bat']")
    void groupAnagrams0() {
        Solution s = new Solution();
        String[] strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
        List<List<String>> expected = List.of(
                List.of("bat"),
                List.of("nat", "tan"),
                List.of("ate", "eat", "tea")
        );

        List<List<String>> actual = s.groupAnagrams(strs);

        assertEquals(normalize(expected), normalize(actual));
    }

    @Test
    @DisplayName("['']")
    void groupAnagrams1() {
        Solution s = new Solution();
        String[] strs = {""};
        List<List<String>> expected = List.of(List.of(""));

        List<List<String>> actual = s.groupAnagrams(strs);

        assertEquals(normalize(expected), normalize(actual));
    }

    @Test
    @DisplayName("['a']")
    void groupAnagrams2() {
        Solution s = new Solution();
        String[] strs = {"a"};
        List<List<String>> expected = List.of(List.of("a"));

        List<List<String>> actual = s.groupAnagrams(strs);

        assertEquals(normalize(expected), normalize(actual));
    }

}
