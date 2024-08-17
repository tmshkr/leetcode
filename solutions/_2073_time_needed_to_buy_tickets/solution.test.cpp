
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> inputs = {2, 3, 2};
  int k = 2;
  int expected = 6;
  int result = s.timeRequiredToBuy(inputs, k);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> inputs = {5, 1, 1, 1};
  int k = 0;
  int expected = 8;
  int result = s.timeRequiredToBuy(inputs, k);
  EXPECT_EQ(result, expected);
}
