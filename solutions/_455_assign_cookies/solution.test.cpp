#include <gtest/gtest.h>
#include <vector>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution sln;
  vector<int> g = {1, 2, 3};
  vector<int> s = {1, 1};
  int result = sln.findContentChildren(g, s);
  EXPECT_EQ(result, 1);
}

TEST(SolutionTest, Test2)
{
  Solution sln;
  vector<int> g = {1, 2};
  vector<int> s = {1, 2, 3};
  int result = sln.findContentChildren(g, s);
  EXPECT_EQ(result, 2);
}
