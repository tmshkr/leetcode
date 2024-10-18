
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<vector<int>> result = s.generate(5);
  vector<vector<int>> expected = {
      {1},
      {1, 1},
      {1, 2, 1},
      {1, 3, 3, 1},
      {1, 4, 6, 4, 1}};

  EXPECT_EQ(result.size(), expected.size());
  for (int i = 0; i < result.size(); i++)
  {
    EXPECT_EQ(result[i].size(), expected[i].size());
    for (int j = 0; j < result[i].size(); j++)
    {
      EXPECT_EQ(result[i][j], expected[i][j]);
    }
  }
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<vector<int>> result = s.generate(1);
  vector<vector<int>> expected = {
      {1}};
  EXPECT_EQ(result.size(), expected.size());
  for (int i = 0; i < result.size(); i++)
  {
    EXPECT_EQ(result[i].size(), expected[i].size());
    for (int j = 0; j < result[i].size(); j++)
    {
      EXPECT_EQ(result[i][j], expected[i][j]);
    }
  }
}
