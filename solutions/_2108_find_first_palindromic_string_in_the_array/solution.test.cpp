#include <gtest/gtest.h>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<string> words = {"abc", "car", "ada", "racecar", "cool"};
  string result = s.firstPalindrome(words);
  string expected = "ada";
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<string> words = {"notapalindrome", "racecar"};
  string result = s.firstPalindrome(words);
  string expected = "racecar";
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<string> words = {"def", "ghi"};
  string result = s.firstPalindrome(words);
  string expected = "";
  EXPECT_EQ(result, expected);
}
