#include <vector>
using namespace std;

class Solution
{
public:
    int mincostTickets(vector<int> &days, vector<int> &costs)
    {
        vector<int> dp(days.back() + 1, 0);
        int i = 0;
        for (int day = 1; day < dp.size(); day++)
        {
            if (day < days[i])
            {
                dp.at(day) = dp.at(day - 1);
            }
            else
            {
                i++;
                dp.at(day) = min({dp.at(day - 1) + costs.at(0),
                                  dp.at(max(0, day - 7)) + costs.at(1),
                                  dp.at(max(0, day - 30)) + costs.at(2)});
            }
        }
        return dp.back();
    }
};

/*
https://leetcode.com/problems/minimum-cost-for-tickets/
*/