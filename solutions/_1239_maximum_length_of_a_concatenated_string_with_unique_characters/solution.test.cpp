
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<string> inputs = {"un", "iq", "ue"};
  int expected = 4;
  int result = s.maxLength(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<string> inputs = {"cha", "r", "act", "ers"};
  int expected = 6;
  int result = s.maxLength(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<string> inputs = {"abcdefghijklmnopqrstuvwxyz"};
  int expected = 26;
  int result = s.maxLength(inputs);
  EXPECT_EQ(result, expected);
}
