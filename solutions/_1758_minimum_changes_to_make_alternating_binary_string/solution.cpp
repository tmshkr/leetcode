#include <string>
using namespace std;

class Solution
{
public:
    int minOperations(string s)
    {
        int n = s.size();
        int count1 = 0, count2 = 0;
        for (int i = 0; i < n; i++)
        {
            if (s[i] - '0' == i % 2)
                count1++;
            else
                count2++;
        }
        return min(count1, count2);
    }
};

/*
https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
*/