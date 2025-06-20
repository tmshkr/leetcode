<?php
require_once 'solution.php';
use PHPUnit\Framework\TestCase;

final class SolutionTest extends TestCase
{
    public function test0()
    {
        $solution = new Solution();
        $actual = $solution->containsDuplicate([1, 2, 3, 1]);
        $this->assertTrue($actual);
    }

    public function test1()
    {
        $solution = new Solution();
        $actual = $solution->containsDuplicate([1, 2, 3, 4]);
        $this->assertFalse($actual);
    }

    public function test2()
    {
        $solution = new Solution();
        $actual = $solution->containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
        $this->assertTrue($actual);
    }
}