
#include <vector>
using namespace std;

class Solution
{
public:
    bool isMonotonic(vector<int> &nums)
    {
        bool increasing = true;
        bool decreasing = true;

        for (int i = 1; i < nums.size(); i++)
        {
            if (nums.at(i) > nums.at(i - 1))
            {
                decreasing = false;
            }
            if (nums.at(i) < nums.at(i - 1))
            {
                increasing = false;
            }
        }

        return increasing || decreasing;
    }
};

/*
https://leetcode.com/problems/monotonic-array/
*/