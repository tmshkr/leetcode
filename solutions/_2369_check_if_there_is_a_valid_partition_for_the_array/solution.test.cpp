
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> nums = {4, 4, 4, 5, 6};
  bool expected = true;
  bool result = s.validPartition(nums);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> nums = {1, 1, 1, 2};
  bool expected = false;
  bool result = s.validPartition(nums);
  EXPECT_EQ(result, expected);
}
