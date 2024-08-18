#include <vector>
using namespace std;

class Solution
{
public:
    int specialArray(vector<int> &nums)
    {
        sort(nums.begin(), nums.end());
        int prev = INT_MIN;
        for (int i = 0; i < nums.size(); i++)
        {
            int num = nums[i];
            int remaining = nums.size() - i;
            if (num >= remaining && remaining > prev)
            {
                return remaining;
            }
            prev = num;
        }
        return -1;
    }
};

/*
https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
*/