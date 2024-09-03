#include <gtest/gtest.h>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  string input = "Let's take LeetCode contest";
  string expected = "s'teL ekat edoCteeL tsetnoc";
  string result = s.reverseWords(input);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  string input = "Mr Ding";
  string expected = "rM gniD";
  string result = s.reverseWords(input);
  EXPECT_EQ(result, expected);
}
