#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> inputs = {2, 7, 4, 1, 8, 1};
  int expected = 1;
  int result = s.lastStoneWeight(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> inputs = {1};
  int expected = 1;
  int result = s.lastStoneWeight(inputs);
  EXPECT_EQ(result, expected);
}
