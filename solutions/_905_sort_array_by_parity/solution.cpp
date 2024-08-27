#include <vector>
using namespace std;

class Solution
{
public:
    vector<int> sortArrayByParity(vector<int> &nums)
    {
        int L = 0;
        for (int R = 0; R < nums.size(); R++)
        {
            if (nums[R] % 2 == 0)
            {
                swap(nums[L++], nums[R]);
            }
        }
        return nums;
    }
};

/*
https://leetcode.com/problems/sort-array-by-parity/
*/