<?php
require_once 'solution.php';
use PHPUnit\Framework\TestCase;

final class SolutionTest extends TestCase
{
    public function testContainsDuplicate()
    {
        $solution = new Solution();
        $this->assertTrue($solution->containsDuplicate([1, 2, 3, 1]));
        $this->assertFalse($solution->containsDuplicate([1, 2, 3, 4]));
    }
}