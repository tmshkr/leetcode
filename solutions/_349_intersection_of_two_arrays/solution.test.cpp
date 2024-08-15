#include <gtest/gtest.h>
#include <vector>
#include "solution.cpp"
using namespace std;

TEST(SolutionTest, Test1)
{
  Solution s;
  vector<int> nums1 = {1, 2, 2, 1};
  vector<int> nums2 = {2, 2};
  vector<int> result = s.intersection(nums1, nums2);
  vector<int> expected = {2};
  EXPECT_EQ(result, expected);
}

TEST(SolutionTest, Test2)
{
  Solution s;
  vector<int> nums1 = {4, 9, 5};
  vector<int> nums2 = {9, 4, 9, 8, 4};
  vector<int> result = s.intersection(nums1, nums2);
  vector<int> expected = {4, 9};
  EXPECT_EQ(result, expected);
}
