#include <gtest/gtest.h>
#include <algorithm>
#include <string>
#include <vector>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<string> words = {"mass", "as", "hero", "superhero"};
  vector<string> expected = {"as", "hero"};
  auto actual = s.stringMatching(words);
  sort(actual.begin(), actual.end());
  sort(expected.begin(), expected.end());
  EXPECT_EQ(actual, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<string> words = {"leetcode", "et", "code"};
  vector<string> expected = {"et", "code"};
  auto actual = s.stringMatching(words);
  sort(actual.begin(), actual.end());
  sort(expected.begin(), expected.end());
  EXPECT_EQ(actual, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<string> words = {"blue", "green", "bu"};
  vector<string> expected = {};
  auto actual = s.stringMatching(words);
  sort(actual.begin(), actual.end());
  sort(expected.begin(), expected.end());
  EXPECT_EQ(actual, expected);
}
