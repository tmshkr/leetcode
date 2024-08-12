
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  EXPECT_EQ(s.maxLengthBetweenEqualCharacters("aa"), 0);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  EXPECT_EQ(s.maxLengthBetweenEqualCharacters("abca"), 2);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  EXPECT_EQ(s.maxLengthBetweenEqualCharacters("cbzxy"), -1);
}
