#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  string inputs = "6777133339";
  string expected = "777";
  string result = s.largestGoodInteger(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  string inputs = "2300019";
  string expected = "000";
  string result = s.largestGoodInteger(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  string inputs = "42352338";
  string expected = "";
  string result = s.largestGoodInteger(inputs);
  EXPECT_EQ(result, expected);
}
