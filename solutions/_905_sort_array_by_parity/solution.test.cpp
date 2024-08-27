#include <gtest/gtest.h>
#include <vector>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> inputs = {3, 1, 2, 4};
  vector<int> expected = {2, 4, 3, 1};
  vector<int> result = s.sortArrayByParity(inputs);
  EXPECT_EQ(expected.size(), result.size());
  for (int i = 0; i < expected.size(); i++)
  {
    EXPECT_EQ(expected[i], result[i]);
  }
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> inputs = {0};
  vector<int> expected = {0};
  vector<int> result = s.sortArrayByParity(inputs);
  EXPECT_EQ(expected.size(), result.size());
  for (int i = 0; i < expected.size(); i++)
  {
    EXPECT_EQ(expected[i], result[i]);
  }
}
