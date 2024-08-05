#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution
{
public:
    string destCity(vector<vector<string>> &paths)
    {
        set<string> cities;
        for (auto path : paths)
        {
            cities.insert(path[0]);
        }
        for (auto path : paths)
        {
            if (cities.find(path[1]) == cities.end())
            {
                return path[1];
            }
        }
        return "";
    }
};

/*
https://leetcode.com/problems/destination-city/
*/