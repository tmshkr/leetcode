
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  string inputs = "00110110";
  int k = 2;
  bool result = s.hasAllCodes(inputs, k);
  bool expected = true;
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  string inputs = "0110";
  int k = 1;
  bool result = s.hasAllCodes(inputs, k);
  bool expected = true;
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  string inputs = "0110";
  int k = 2;
  bool result = s.hasAllCodes(inputs, k);
  bool expected = false;
  EXPECT_EQ(result, expected);
}
