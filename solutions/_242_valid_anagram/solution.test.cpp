
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  EXPECT_EQ(s.isAnagram("anagram", "nagaram"), true);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  EXPECT_EQ(s.isAnagram("rat", "car"), false);
}
