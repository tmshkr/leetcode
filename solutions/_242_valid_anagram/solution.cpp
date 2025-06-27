#include <string>
#include <vector>
using namespace std;

class Solution
{
public:
    bool isAnagram(string s, string t)
    {
        size_t n = s.size();
        size_t m = t.size();
        if (n != m)
            return false;

        vector<int> count(26, 0);

        for (size_t i = 0; i < n; i++)
        {
            count[s[i] - 'a']++;
            count[t[i] - 'a']--;
        }

        for (size_t i = 0; i < 26; i++)
        {
            if (count[i] != 0)
                return false;
        }

        return true;
    }
};

/*
https://leetcode.com/problems/valid-anagram/
*/