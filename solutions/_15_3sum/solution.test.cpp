
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

void compare(vector<vector<int>> result, vector<vector<int>> expected)
{
  EXPECT_EQ(result.size(), expected.size());
  for (int i = 0; i < expected.size(); i++)
  {
    for (int j = 0; j < expected[i].size(); j++)
    {
      EXPECT_EQ(result[i][j], expected[i][j]);
    }
  }
}

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> nums = {-1, 0, 1, 2, -1, -4};
  vector<vector<int>> expected = {{-1, -1, 2}, {-1, 0, 1}};
  vector<vector<int>> result = s.threeSum(nums);

  compare(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> nums = {0, 1, 1};
  vector<vector<int>> expected = {};
  vector<vector<int>> result = s.threeSum(nums);

  compare(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<int> nums = {0, 0, 0};
  vector<vector<int>> expected = {{0, 0, 0}};
  vector<vector<int>> result = s.threeSum(nums);

  compare(result, expected);
}
