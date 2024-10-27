#include <vector>
using namespace std;

class Solution
{
public:
    vector<vector<int>> threeSum(vector<int> &nums)
    {
        vector<vector<int>> result;
        sort(nums.begin(), nums.end());
        int n = nums.size();

        for (int i = 0; i < n - 2; i++)
        {
            if (i > 0 && nums[i] == nums[i - 1])
                continue;

            int L = i + 1;
            int R = n - 1;

            while (L < R)
            {
                int sum = nums[i] + nums[L] + nums[R];
                if (sum < 0)
                    L++;
                else if (sum > 0)
                    R--;
                else
                {
                    result.push_back({nums[i], nums[L], nums[R]});
                    while (L < R && nums[L] == nums[L + 1])
                        L++;
                    while (L < R && nums[R] == nums[R - 1])
                        R--;
                    L++;
                    R--;
                }
            }
        }
        return result;
    }
};

/*
https://leetcode.com/problems/3sum/
*/