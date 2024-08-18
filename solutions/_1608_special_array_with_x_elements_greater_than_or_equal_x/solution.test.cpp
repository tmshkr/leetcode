#include <gtest/gtest.h>
#include <vector>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> inputs = {3, 5};
  int expected = 2;
  int result = s.specialArray(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> inputs = {0, 0};
  int expected = -1;
  int result = s.specialArray(inputs);
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<int> inputs = {0, 4, 3, 0, 4};
  int expected = 3;
  int result = s.specialArray(inputs);
  EXPECT_EQ(result, expected);
}
