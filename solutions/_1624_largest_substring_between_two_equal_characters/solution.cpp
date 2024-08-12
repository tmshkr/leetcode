#include <string>
#include <map>
using namespace std;

class Solution
{
public:
    int maxLengthBetweenEqualCharacters(string s)
    {
        map<char, int> first;
        int ans = -1;
        for (int i = 0; i < s.size(); i++)
        {
            if (first.find(s[i]) == first.end())
            {
                first[s[i]] = i;
            }
            else
            {
                ans = max(ans, i - first[s[i]] - 1);
            }
        }
        return ans;
    };
};

/*
https://leetcode.com/problems/largest-substring-between-two-equal-characters/
*/