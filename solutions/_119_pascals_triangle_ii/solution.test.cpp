#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> result = s.getRow(3);
  vector<int> expected = {1, 3, 3, 1};
  ASSERT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> result = s.getRow(0);
  vector<int> expected = {1};
  ASSERT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<int> result = s.getRow(1);
  vector<int> expected = {1, 1};
  ASSERT_EQ(result, expected);
}
