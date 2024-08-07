#include <gtest/gtest.h>
#include <iostream>
#include <string>
#include <vector>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  EXPECT_EQ(s.maxScore("011101"), 5);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  EXPECT_EQ(s.maxScore("00111"), 5);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  EXPECT_EQ(s.maxScore("1111"), 3);
}
