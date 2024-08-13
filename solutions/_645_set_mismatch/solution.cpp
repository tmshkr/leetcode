#include <set>
#include <vector>
using namespace std;

class Solution
{
public:
    vector<int> findErrorNums(vector<int> &nums)
    {
        set<int> s;
        int n = nums.size();
        int sum = 0;
        int duplicate = -1;
        for (int num : nums)
        {
            if (s.find(num) != s.end())
                duplicate = num;
            else
                s.insert(num);
            sum += num;
        }

        vector<int> result;
        int missing = (n * (n + 1) / 2) - (sum - duplicate);
        result.push_back(duplicate);
        result.push_back(missing);
        return result;
    }
};

/*
https://leetcode.com/problems/set-mismatch/
*/