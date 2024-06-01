
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> nums = {1, 2, 3};
  int target = 4;
  int expected = 7;
  int result = s.combinationSum4(nums, target);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> nums = {9};
  int target = 3;
  int expected = 0;
  int result = s.combinationSum4(nums, target);
  EXPECT_EQ(result, expected);
}
