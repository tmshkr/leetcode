
<?php
require_once 'solution.php';
use PHPUnit\Framework\TestCase;

final class SolutionTest extends TestCase
{

    // The order of the groups, and of the strings within each group, is
    // arbitrary, so both are sorted before comparing.
    private function normalize(array $groups): array
    {
        $normalized = [];
        foreach ($groups as $group) {
            sort($group);
            $normalized[] = $group;
        }
        usort($normalized, fn($a, $b) => implode(",", $a) <=> implode(",", $b));
        return $normalized;
    }

    public function test0()
    {
        $solution = new Solution();
        $result = $solution->groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
        $expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

        $this->assertEquals($this->normalize($expected), $this->normalize($result));
    }

    public function test1()
    {
        $solution = new Solution();
        $result = $solution->groupAnagrams([""]);
        $expected = [[""]];

        $this->assertEquals($this->normalize($expected), $this->normalize($result));
    }

    public function test2()
    {
        $solution = new Solution();
        $result = $solution->groupAnagrams(["a"]);
        $expected = [["a"]];

        $this->assertEquals($this->normalize($expected), $this->normalize($result));
    }

}
