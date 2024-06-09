#include <vector>
#include <set>
using namespace std;

class Solution
{
public:
    int mincostTickets(vector<int> &days, vector<int> &costs)
    {
        vector<int> dp(days.back() + 1, 0);
        set<int> travel(days.begin(), days.end());
        for (int i = 1; i < dp.size(); i++)
        {
            if (travel.find(i) == travel.end())
            {
                dp.at(i) = dp.at(i - 1);
            }
            else
            {
                dp.at(i) = min({dp.at(i - 1) + costs.at(0),
                                dp.at(max(0, i - 7)) + costs.at(1),
                                dp.at(max(0, i - 30)) + costs.at(2)});
            }
        }
        return dp.back();
    }
};

/*
https://leetcode.com/problems/minimum-cost-for-tickets/
*/