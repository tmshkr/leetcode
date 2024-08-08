#include <gtest/gtest.h>
#include <iostream>
#include <string>
#include <vector>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  EXPECT_EQ(s.isPathCrossing("NES"), false);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  EXPECT_EQ(s.isPathCrossing("NESWW"), true);
}
