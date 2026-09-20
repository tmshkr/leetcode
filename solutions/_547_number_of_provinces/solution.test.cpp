#include <gtest/gtest.h>
#include <vector>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<vector<int>> isConnected = {{1, 1, 0}, {1, 1, 0}, {0, 0, 1}};
  int expected = 2;
  int actual = s.findCircleNum(isConnected);
  EXPECT_EQ(actual, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<vector<int>> isConnected = {{1, 0, 0}, {0, 1, 0}, {0, 0, 1}};
  int expected = 3;
  int actual = s.findCircleNum(isConnected);
  EXPECT_EQ(actual, expected);
}
