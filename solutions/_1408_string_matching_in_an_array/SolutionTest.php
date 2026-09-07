<?php
require_once __DIR__ . '/solution.php';
use PHPUnit\Framework\TestCase;

final class SolutionTest extends TestCase
{

    public function test0(): void
    {
        $solution = new Solution();
        $words = ["mass", "as", "hero", "superhero"];
        $expected = ["as", "hero"];
        $actual = $solution->stringMatching($words);
        $this->assertEqualsCanonicalizing($expected, $actual);
    }

    public function test1(): void
    {
        $solution = new Solution();
        $words = ["leetcode", "et", "code"];
        $expected = ["et", "code"];
        $actual = $solution->stringMatching($words);
        $this->assertEqualsCanonicalizing($expected, $actual);
    }

    public function test2(): void
    {
        $solution = new Solution();
        $words = ["blue", "green", "bu"];
        $expected = [];
        $actual = $solution->stringMatching($words);
        $this->assertEqualsCanonicalizing($expected, $actual);
    }
}
