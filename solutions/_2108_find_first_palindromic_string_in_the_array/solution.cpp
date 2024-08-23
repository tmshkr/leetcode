#include <string>
#include <vector>
using namespace std;

class Solution
{
public:
    string firstPalindrome(vector<string> &words)
    {
        for (string &word : words)
        {
            string reversed = word;
            reverse(reversed.begin(), reversed.end());
            if (word == reversed)
            {
                return word;
            }
        }
        return "";
    }
};

/*
https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
*/