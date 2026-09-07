
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    vector<string> stringMatching(vector<string>& words) {
        vector<string> result;
        for (size_t i = 0; i < words.size(); ++i) {
            for (size_t j = 0; j < words.size(); ++j) {
                if (i != j && words[j].find(words[i]) != string::npos) {
                    result.push_back(words[i]);
                    break;
                }
            }
        }
        return result;
    }
};

/*
https://leetcode.com/problems/string-matching-in-an-array/
*/
