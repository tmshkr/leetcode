#include <gtest/gtest.h>
#include <iostream>
#include <vector>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<string> expected = {"255.255.11.135", "255.255.111.35"};
  vector<string> actual = s.restoreIpAddresses("25525511135");
  EXPECT_EQ(expected, actual);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<string> expected = {"0.0.0.0"};
  vector<string> actual = s.restoreIpAddresses("0000");
  EXPECT_EQ(expected, actual);
}

TEST(SolutionTest, Test3)
{
  Solution s;
  vector<string> expected = {"1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"};
  vector<string> actual = s.restoreIpAddresses("101023");
  EXPECT_EQ(expected, actual);
}
