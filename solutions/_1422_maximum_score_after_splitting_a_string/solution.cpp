#include <vector>
#include <string>
using namespace std;

class Solution
{
public:
    int maxScore(string s)
    {
        int n = s.size();
        int zeros = 0;
        int ones = 0;
        for (int i = 0; i < n; i++)
        {
            if (s.at(i) == '1')
            {
                ones++;
            }
        }
        int maxScore = 0;
        for (int i = 0; i < n - 1; i++)
        {
            if (s.at(i) == '0')
            {
                zeros++;
            }
            else
            {
                ones--;
            }
            maxScore = max(maxScore, ones + zeros);
        }
        return maxScore;
    }
};

/*
https://leetcode.com/problems/maximum-score-after-splitting-a-string/
*/