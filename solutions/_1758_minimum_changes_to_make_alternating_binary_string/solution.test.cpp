
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  EXPECT_EQ(s.minOperations("0100"), 1);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  EXPECT_EQ(s.minOperations("10"), 0);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  EXPECT_EQ(s.minOperations("1111"), 2);
}
