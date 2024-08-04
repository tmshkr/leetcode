#include <string>
#include <vector>
using namespace std;

class Solution
{
public:
    string largestGoodInteger(string num)
    {
        string largest = "";
        char ch;
        for (int i = 0; i <= num.size() - 3; i++)
        {
            ch = num[i];
            if (ch == num.at(i + 1) && ch == num.at(i + 2))
            {
                if (largest.empty() || num.substr(i, 3) > largest)
                {
                    largest = num.substr(i, 3);
                }
            }
        }
        return largest;
    }
};

/*
https://leetcode.com/problems/largest-3-same-digit-number-in-string/
*/