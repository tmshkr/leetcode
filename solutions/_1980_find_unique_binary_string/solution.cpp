#include <vector>
#include <set>
#include <string>
using namespace std;

class Solution
{
public:
    string findDifferentBinaryString(vector<string> &nums)
    {
        int n = nums.size();
        set<string> s(nums.begin(), nums.end());
        for (int i = 0; i < 1 << n; i++)
        {
            string t;
            for (int j = 0; j < n; j++)
                t += (i >> j & 1) + '0';
            if (!s.count(t))
                return t;
        }
        return "";
    }
};

/*
https://leetcode.com/problems/find-unique-binary-string/
*/