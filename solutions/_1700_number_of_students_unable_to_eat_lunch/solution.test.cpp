
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> students = {1, 1, 0, 0};
  vector<int> sandwiches = {0, 1, 0, 1};
  int expected = 0;
  int result = s.countStudents(students, sandwiches);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> students = {1, 1, 1, 0, 0, 1};
  vector<int> sandwiches = {1, 0, 0, 0, 1, 1};
  int expected = 3;
  int result = s.countStudents(students, sandwiches);
  EXPECT_EQ(result, expected);
}
