
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> matchsticks = {1, 1, 2, 2, 2};
  bool expected = true;
  bool result = s.makesquare(matchsticks);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> matchsticks = {3, 3, 3, 3, 4};
  bool expected = false;
  bool result = s.makesquare(matchsticks);
  EXPECT_EQ(result, expected);
}
