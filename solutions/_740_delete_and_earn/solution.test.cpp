
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> nums = {3, 4, 2};
  int actual = s.deleteAndEarn(nums);
  EXPECT_EQ(actual, 6);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> nums = {2, 2, 3, 3, 3, 4};
  int actual = s.deleteAndEarn(nums);
  EXPECT_EQ(actual, 9);
}
