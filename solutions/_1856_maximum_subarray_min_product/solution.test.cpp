
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> inputs = {1, 2, 3, 2};
  int expected = 14;
  int result = s.maxSumMinProduct(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> inputs = {2, 3, 3, 1, 2};
  int expected = 18;
  int result = s.maxSumMinProduct(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<int> inputs = {3, 1, 5, 6, 4, 2};
  int expected = 60;
  int result = s.maxSumMinProduct(inputs);
  EXPECT_EQ(result, expected);
}
