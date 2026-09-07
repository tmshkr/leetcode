
#include <gtest/gtest.h>
#include <algorithm>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

// The order of the groups, and of the strings within each group, is arbitrary,
// so both are sorted before comparing.
static vector<vector<string>> normalize(vector<vector<string>> groups)
{
  for (vector<string> &group : groups)
  {
    sort(group.begin(), group.end());
  }
  sort(groups.begin(), groups.end());
  return groups;
}

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<string> strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
  vector<vector<string>> expected = {{"bat"}, {"nat", "tan"}, {"ate", "eat", "tea"}};

  EXPECT_EQ(normalize(s.groupAnagrams(strs)), normalize(expected));
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<string> strs = {""};
  vector<vector<string>> expected = {{""}};

  EXPECT_EQ(normalize(s.groupAnagrams(strs)), normalize(expected));
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<string> strs = {"a"};
  vector<vector<string>> expected = {{"a"}};

  EXPECT_EQ(normalize(s.groupAnagrams(strs)), normalize(expected));
}
