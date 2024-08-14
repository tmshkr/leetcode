
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  string inputs = "leetcode";
  int expected = 0;
  int result = s.firstUniqChar(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  string inputs = "loveleetcode";
  int expected = 2;
  int result = s.firstUniqChar(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  string inputs = "aabb";
  int expected = -1;
  int result = s.firstUniqChar(inputs);
  EXPECT_EQ(result, expected);
}
