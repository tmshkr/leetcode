
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

TEST(SolutionTest, Test1)
{
  Solution s;
  ASSERT_EQ(s.splitString("1234"), false);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  ASSERT_EQ(s.splitString("050043"), true);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  ASSERT_EQ(s.splitString("9080701"), false);
}

TEST(SolutionTest, Test4)
{
  Solution s;
  ASSERT_EQ(s.splitString("64424509442147483647"), false);
}
