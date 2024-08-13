#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> inputs = {1, 2, 2, 4};
  vector<int> expected = {2, 3};
  vector<int> result = s.findErrorNums(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> inputs = {1, 1};
  vector<int> expected = {1, 2};
  vector<int> result = s.findErrorNums(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<int> inputs = {2, 2};
  vector<int> expected = {2, 1};
  vector<int> result = s.findErrorNums(inputs);
  EXPECT_EQ(result, expected);
}