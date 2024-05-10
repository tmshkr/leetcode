#include <vector>
using namespace std;

class Solution
{
private:
    vector<int> sides;
    vector<int> matchsticks;
    int side;

    bool dfs(int i)
    {
        if (i == matchsticks.size())
        {
            return sides[0] == sides[1] && sides[1] == sides[2] && sides[2] == sides[3];
        }

        for (int j = 0; j < 4; j++)
        {
            if (sides[j] + matchsticks[i] <= side)
            {
                sides[j] += matchsticks[i];
                if (dfs(i + 1))
                    return true;
                sides[j] -= matchsticks[i];
            }
        }

        return false;
    }

public:
    bool makesquare(vector<int> &matchsticks)
    {
        if (matchsticks.size() < 4)
            return false;

        int perimeter = 0;
        for (int i = 0; i < matchsticks.size(); i++)
        {
            perimeter += matchsticks[i];
        }

        if (perimeter % 4 != 0)
            return false;

        side = perimeter / 4;
        sides = vector<int>(4, 0);
        sort(matchsticks.rbegin(), matchsticks.rend());
        this->matchsticks = matchsticks;

        return dfs(0);
    }
};

/*
https://leetcode.com/problems/matchsticks-to-square/
*/