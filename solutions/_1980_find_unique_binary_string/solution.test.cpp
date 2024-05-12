
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<string> inputs = {"01", "10"};
  vector<string> expected = {"00", "11"};
  string actual = s.findDifferentBinaryString(inputs);
  auto it = find(expected.begin(), expected.end(), actual);
  ASSERT_NE(it, expected.end());
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<string> inputs = {"00", "01"};
  vector<string> expected = {"10", "11"};
  string actual = s.findDifferentBinaryString(inputs);
  auto it = find(expected.begin(), expected.end(), actual);
  ASSERT_NE(it, expected.end());
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<string> inputs = {"111", "011", "001"};
  vector<string> expected = {"000", "010", "100", "101", "110"};
  string actual = s.findDifferentBinaryString(inputs);
  auto it = find(expected.begin(), expected.end(), actual);
  ASSERT_NE(it, expected.end());
}
