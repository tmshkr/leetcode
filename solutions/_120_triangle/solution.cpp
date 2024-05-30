
#include <vector>
using namespace std;

class Solution
{
public:
    int minimumTotal(vector<vector<int>> &triangle)
    {
        int n = triangle.size();
        vector<int> dp(n + 1);
        for (int i = n - 1; i >= 0; i--)
        {
            vector<int> &row = triangle[i];
            for (int j = 0; j < row.size(); j++)
            {
                dp[j] = row[j] + min(dp[j], dp[j + 1]);
            }
        }

        return dp[0];
    }
};

/*
https://leetcode.com/problems/triangle/
*/