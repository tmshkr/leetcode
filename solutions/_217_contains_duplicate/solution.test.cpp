
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> inputs = {1, 2, 3, 1};
  bool expected = true;
  bool result = s.containsDuplicate(inputs);
  EXPECT_EQ(expected, result);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> inputs = {1, 2, 3, 4};
  bool expected = false;
  bool result = s.containsDuplicate(inputs);
  EXPECT_EQ(expected, result);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<int> inputs = {1, 1, 1, 3, 3, 4, 3, 2, 4, 2};
  bool expected = true;
  bool result = s.containsDuplicate(inputs);
  EXPECT_EQ(expected, result);
}
