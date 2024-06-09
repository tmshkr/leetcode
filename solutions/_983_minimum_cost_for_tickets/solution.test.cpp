
#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"

using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> days = {1, 4, 6, 7, 8, 20};
  vector<int> costs = {2, 7, 15};
  int result = s.mincostTickets(days, costs);
  EXPECT_EQ(result, 11);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> days = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31};
  vector<int> costs = {2, 7, 15};
  int result = s.mincostTickets(days, costs);
  EXPECT_EQ(result, 17);
}
