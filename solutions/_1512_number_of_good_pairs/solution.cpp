#include <vector>
using namespace std;

class Solution
{
public:
    int numIdenticalPairs(vector<int> &nums)
    {
        int count[101] = {};
        int result = 0;
        for (int num : nums)
        {
            result += count[num]++;
        }
        return result;
    }
};

/*
https://leetcode.com/problems/number-of-good-pairs/
*/