#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include <string>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<vector<string>> paths = {{"London", "New York"}, {"New York", "Lima"}, {"Lima", "Sao Paulo"}};
  string result = s.destCity(paths);
  string expected = "Sao Paulo";
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<vector<string>> paths = {{"B", "C"}, {"D", "B"}, {"C", "A"}};
  string result = s.destCity(paths);
  string expected = "A";
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<vector<string>> paths = {{"A", "Z"}};
  string result = s.destCity(paths);
  string expected = "Z";
  EXPECT_EQ(result, expected);
}
