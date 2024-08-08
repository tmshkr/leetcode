#include <set>
#include <string>
using namespace std;

class Solution
{
public:
    bool isPathCrossing(string path)
    {
        int x = 0, y = 0;
        set<pair<int, int>> visited;
        visited.insert({x, y});
        for (char step : path)
        {
            switch (step)
            {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'W':
                x--;
                break;
            }

            if (visited.find({x, y}) != visited.end())
                return true;
            visited.insert({x, y});
        }
        return false;
    }
};

/*
https://leetcode.com/problems/path-crossing/
*/