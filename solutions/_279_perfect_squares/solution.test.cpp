
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

TEST(SolutionTest, Test1)
{
  Solution s;
  int n = 12;
  int expected = 3;
  int result = s.numSquares(n);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  int n = 13;
  int expected = 2;
  int result = s.numSquares(n);
}
