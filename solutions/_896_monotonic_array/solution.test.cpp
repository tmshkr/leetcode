#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> nums = {1, 2, 2, 3};
  bool result = s.isMonotonic(nums);
  bool expected = true;
  ASSERT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> nums = {6, 5, 4, 4};
  bool result = s.isMonotonic(nums);
  bool expected = true;
  ASSERT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<int> nums = {1, 3, 2};
  bool result = s.isMonotonic(nums);
  bool expected = false;
  ASSERT_EQ(result, expected);
}
