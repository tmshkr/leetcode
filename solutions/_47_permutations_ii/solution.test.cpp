
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> nums = {1, 1, 2};
  vector<vector<int>> res = s.permuteUnique(nums);
  vector<vector<int>> expected = {
      {1, 1, 2},
      {1, 2, 1},
      {2, 1, 1}};

  ASSERT_EQ(res.size(), expected.size());
  for (int i = 0; i < res.size(); i++)
  {
    sort(res[i].begin(), res[i].end());
    sort(expected[i].begin(), expected[i].end());
    ASSERT_EQ(res[i], expected[i]);
  }
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> nums = {1, 2, 3};
  vector<vector<int>> res = s.permuteUnique(nums);
  vector<vector<int>> expected = {
      {1, 2, 3},
      {1, 3, 2},
      {2, 1, 3},
      {2, 3, 1},
      {3, 1, 2},
      {3, 2, 1}};
  ASSERT_EQ(res.size(), expected.size());
  for (int i = 0; i < res.size(); i++)
  {
    sort(res[i].begin(), res[i].end());
    sort(expected[i].begin(), expected[i].end());
    ASSERT_EQ(res[i], expected[i]);
  }
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<int> nums = {3, 3, 0, 3};
  vector<vector<int>> res = s.permuteUnique(nums);
  vector<vector<int>> expected = {{0, 3, 3, 3}, {3, 0, 3, 3}, {3, 3, 0, 3}, {3, 3, 3, 0}};
  ASSERT_EQ(res.size(), expected.size());
  for (int i = 0; i < res.size(); i++)
  {
    sort(res[i].begin(), res[i].end());
    sort(expected[i].begin(), expected[i].end());
    ASSERT_EQ(res[i], expected[i]);
  }
}
