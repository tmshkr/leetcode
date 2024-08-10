#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<string> inputs = {"abc", "aabc", "bc"};
  bool expected = true;
  bool result = s.makeEqual(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<string> inputs = {"ab", "a"};
  bool expected = false;
  bool result = s.makeEqual(inputs);
  EXPECT_EQ(result, expected);
}
