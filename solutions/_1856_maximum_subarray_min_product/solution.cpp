#include <vector>
using namespace std;

class Solution
{
public:
    int maxSumMinProduct(vector<int> &nums)
    {
        int n = nums.size();
        long long res = 0;
        vector<long long> prefix(n + 1);
        for (int i = 0; i < n; i++)
        {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        vector<int> stack;

        for (int i = 0; i <= n; i++)
        {
            while (!stack.empty() && (i == n || nums[stack.back()] > nums[i]))
            {
                int j = stack.back();
                stack.pop_back();
                int k = stack.empty() ? -1 : stack.back();
                res = max(res, nums[j] * (prefix[i] - prefix[k + 1]));
            }
            stack.push_back(i);
        }

        return res % 1000000007;
    }
};

/*
https://leetcode.com/problems/maximum-subarray-min-product/
*/