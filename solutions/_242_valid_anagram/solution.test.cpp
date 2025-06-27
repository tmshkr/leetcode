#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  EXPECT_TRUE(s.isAnagram("anagram", "nagaram"));
}

TEST(SolutionTest, Test2)
{
  Solution s;
  EXPECT_FALSE(s.isAnagram("rat", "car"));
}
