#include <vector>
#include <string>

using namespace std;

class Solution
{
public:
    int maxLength(vector<string> &arr)
    {
        vector<int> dp = {0};
        int res = 0;
        for (const string &s : arr)
        {
            int a = 0;
            bool hasDuplicate = false;
            for (char ch : s)
            {
                int b = 1 << (ch - 'a');
                if (a & b)
                {
                    hasDuplicate = true;
                    break;
                }
                a |= b;
            }
            if (hasDuplicate)
                continue;
            for (int i = dp.size() - 1; i >= 0; --i)
            {
                bool hasOverlap = (dp[i] & a) != 0;
                if (hasOverlap)
                    continue;
                dp.push_back(dp[i] | a);
                res = max(res, __builtin_popcount(dp.back()));
            }
        }
        return res;
    }
};

/*
https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
*/