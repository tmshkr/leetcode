#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    bool containsDuplicate(vector<int> &nums)
    {
        sort(nums.begin(), nums.end());
        size_t n = nums.size();
        for (size_t i = 0; i < n - 1; ++i)
        {
            if (nums[i] == nums[i + 1])
                return true;
        }
        return false;
    }
};

/*
https://leetcode.com/problems/contains-duplicate/
*/