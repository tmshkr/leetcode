
#include <vector>
#include <string>
using namespace std;

class Solution
{
private:
    string s;

    bool split(int i, long long prev, int count)
    {
        if (i >= s.size())
            return count >= 2;

        unsigned long long num = 0;
        for (int j = i; j < s.size(); j++)
        {
            num = num * 10 + s[j] - '0';
            if (prev == -1 || prev - 1 == num)
                if (split(j + 1, num, count + 1))
                    return true;
        }

        return false;
    }

public:
    bool splitString(string s)
    {
        this->s = s;
        return split(0, -1, 0);
    }
};

/*
https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/
*/