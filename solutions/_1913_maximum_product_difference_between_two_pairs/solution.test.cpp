#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> inputs = {5, 6, 2, 7, 4};
  int expected = 34;
  int result = s.maxProductDifference(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> inputs = {4, 2, 5, 9, 7, 4, 8};
  int expected = 64;
  int result = s.maxProductDifference(inputs);
  EXPECT_EQ(result, expected);
}
