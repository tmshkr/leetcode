
<?php
require_once 'solution.php';
use PHPUnit\Framework\TestCase;

final class SolutionTest extends TestCase
{


public function test0()
{
    $solution = new Solution();
    $result = $solution->isAnagram("anagram", "nagaram");
    $this->assertTrue($result, "Expected true for inputs 'anagram' and 'nagaram'");
}
  
public function test1()
{
    $solution = new Solution();
    $result = $solution->isAnagram("rat", "car");
    $this->assertFalse($result, "Expected false for inputs 'rat' and 'car'");
}
  
}