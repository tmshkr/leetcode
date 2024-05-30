
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<vector<int>> triangle = {{2}, {3, 4}, {6, 5, 7}, {4, 1, 8, 3}};
  int result = s.minimumTotal(triangle);
  EXPECT_EQ(result, 11);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<vector<int>> triangle = {{-10}};
  int result = s.minimumTotal(triangle);
  EXPECT_EQ(result, -10);
}
