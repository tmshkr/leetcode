
#include <vector>
#include <string>
using namespace std;

class Solution
{
private:
    string s;            // input string
    vector<string> res;  // result
    vector<string> path; // current path

    void backtrack(int start)
    {
        if (path.size() == 4)
        {
            if (start == s.size())
                res.push_back(path[0] + "." + path[1] + "." + path[2] + "." + path[3]);
        }
        else
        {
            for (int i = 1; i <= 3; i++)
            {
                if (start + i > s.size())
                    break;
                if (i > 1 && s[start] == '0')
                    break;

                string octet = s.substr(start, i);
                int num = stoi(octet);
                if (num >= 0 && num <= 255)
                {
                    path.push_back(octet);
                    backtrack(start + i);
                    path.pop_back();
                }
            }
        }
    }

public:
    vector<string> restoreIpAddresses(string s)
    {
        this->s = s;
        backtrack(0);
        return res;
    }
};

/*
https://leetcode.com/problems/restore-ip-addresses/
*/