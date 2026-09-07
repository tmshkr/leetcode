
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution
{
public:
    vector<vector<string>> groupAnagrams(vector<string> &strs)
    {
        vector<vector<string>> result;
        if (strs.empty())
            return result;

        unordered_map<string, vector<string>> anagram_map;
        for (const string &str : strs)
        {
            string sorted_str = str;
            sort(sorted_str.begin(), sorted_str.end());
            anagram_map[sorted_str].push_back(str);
        }

        for (const auto &pair : anagram_map)
        {
            result.push_back(pair.second);
        }

        return result;
    }
};

/*
https://leetcode.com/problems/group-anagrams/
*/
