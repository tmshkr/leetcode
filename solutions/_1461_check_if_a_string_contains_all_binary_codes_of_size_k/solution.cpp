
#include <iostream>
#include <string>
#include <set>
using namespace std;

class Solution
{
public:
    bool hasAllCodes(string s, int k)
    {
        if (k > s.size())
            return false;

        set<string> seen;
        for (int i = 0; i <= s.size() - k; i++)
        {
            seen.insert(s.substr(i, k));
        }

        return seen.size() == 1 << k;
    }
};

/*
https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
*/