
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> inputs = {1, 2, 3, 1, 1, 3};
  int expected = 4;
  int result = s.numIdenticalPairs(inputs);
  ASSERT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> inputs = {1, 1, 1, 1};
  int expected = 6;
  int result = s.numIdenticalPairs(inputs);
  ASSERT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<int> inputs = {1, 2, 3};
  int expected = 0;
  int result = s.numIdenticalPairs(inputs);
  ASSERT_EQ(result, expected);
}
