#include <vector>
using namespace std;

class Solution
{
public:
    int deleteAndEarn(vector<int> &nums)
    {
        auto max_num = max_element(nums.begin(), nums.end());
        vector<int> points(*max_num + 1, 0);
        for (int num : nums)
        {
            points[num] += num;
        }

        int curr = 0;
        int prev = 0;
        int temp = 0;
        for (int i = 0; i < points.size(); i++)
        {
            temp = curr;
            curr = max(curr, prev + points[i]);
            prev = temp;
        }

        return curr;
    }
};

/*
https://leetcode.com/problems/delete-and-earn/
*/