
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> nums = {2, 7, 11, 15};
  int target = 9;
  vector<int> result = s.twoSum(nums, target);
  vector<int> expected = {0, 1};
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> nums = {3, 2, 4};
  int target = 6;
  vector<int> result = s.twoSum(nums, target);
  vector<int> expected = {1, 2};
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<int> nums = {3, 3};
  int target = 6;
  vector<int> result = s.twoSum(nums, target);
  vector<int> expected = {0, 1};
  EXPECT_EQ(result, expected);
}
