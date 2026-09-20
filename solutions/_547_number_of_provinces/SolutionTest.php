<?php
require_once __DIR__ . '/solution.php';
use PHPUnit\Framework\TestCase;

final class SolutionTest extends TestCase
{

    public function test0(): void
    {
        $solution = new Solution();
        $isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
        $expected = 2;
        $actual = $solution->findCircleNum($isConnected);
        $this->assertEquals($expected, $actual);
    }

    public function test1(): void
    {
        $solution = new Solution();
        $isConnected = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
        $expected = 3;
        $actual = $solution->findCircleNum($isConnected);
        $this->assertEquals($expected, $actual);
    }
}
