#include <string>
#include <vector>
using namespace std;

class Solution
{
public:
    string reverseWords(string s)
    {
        vector<string> words;
        string word = "";
        for (int i = 0; i < s.size(); i++)
        {
            if (s[i] == ' ')
            {
                words.push_back(word);
                word = "";
            }
            else
            {
                word += s[i];
            }
        }
        words.push_back(word);
        string result = "";
        for (int i = 0; i < words.size(); i++)
        {
            reverse(words[i].begin(), words[i].end());
            result += words[i];
            if (i < words.size() - 1)
            {
                result += " ";
            }
        }
        return result;
    }
};

/*
https://leetcode.com/problems/reverse-words-in-a-string-iii/
*/