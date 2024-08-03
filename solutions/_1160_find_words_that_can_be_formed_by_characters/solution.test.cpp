#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<string> words = {"cat", "bt", "hat", "tree"};
  string chars = "atach";
  int expected = 6;
  int result = s.countCharacters(words, chars);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<string> words = {"hello", "world", "leetcode"};
  string chars = "welldonehoneyr";
  int expected = 10;
  int result = s.countCharacters(words, chars);
  EXPECT_EQ(result, expected);
}
