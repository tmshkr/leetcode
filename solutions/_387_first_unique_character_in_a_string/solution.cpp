#include <string>
using namespace std;

class Solution
{
public:
    int firstUniqChar(string s)
    {
        int freq[26] = {};
        for (char c : s)
        {
            freq[c - 'a']++;
        }
        for (int i = 0; i < s.size(); i++)
        {
            if (freq[s[i] - 'a'] == 1)
            {
                return i;
            }
        }
        return -1;
    }
};

/*
https://leetcode.com/problems/first-unique-character-in-a-string/
*/