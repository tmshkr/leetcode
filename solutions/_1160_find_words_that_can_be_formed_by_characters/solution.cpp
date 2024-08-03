#include <vector>
#include <string>
using namespace std;

class Solution
{
public:
    int countCharacters(vector<string> &words, string chars)
    {
        int result = 0;
        vector<int> charCount(26, 0);
        for (char c : chars)
        {
            charCount[c - 'a']++;
        }
        for (string word : words)
        {
            vector<int> wordCount(26, 0);
            bool good = true;
            for (char c : word)
            {
                wordCount[c - 'a']++;
                if (wordCount[c - 'a'] > charCount[c - 'a'])
                {
                    good = false;
                    break;
                }
            }
            if (good)
            {
                result += word.size();
            }
        }
        return result;
    }
};

/*
https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
*/