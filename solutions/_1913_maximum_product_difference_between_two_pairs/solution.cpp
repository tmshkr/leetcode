#include <algorithm>
#include <vector>
using namespace std;

class Solution
{
public:
    int maxProductDifference(vector<int> &nums)
    {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        return nums.at(n - 1) * nums.at(n - 2) - nums.at(0) * nums.at(1);
    }
};

/*
https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
*/