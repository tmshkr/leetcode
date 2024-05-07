
#include <vector>
using namespace std;

class Solution
{
public:
    vector<int> nums;
    vector<vector<int>> res;
    vector<bool> visited;

    vector<vector<int>> permuteUnique(vector<int> &nums)
    {
        sort(nums.begin(), nums.end());
        this->nums = nums;
        this->visited = vector<bool>(nums.size(), false);
        vector<int> perm;
        backtrack(perm);
        return res;
    }

    void backtrack(vector<int> &perm)
    {
        if (perm.size() == nums.size())
        {
            res.push_back(perm);
        }
        else
        {
            for (int i = 0; i < nums.size(); i++)
            {
                if (visited[i])
                    continue;
                if (i > 0 && nums[i] == nums[i - 1] && !visited[i - 1])
                    continue;
                visited[i] = true;
                perm.push_back(nums[i]);
                backtrack(perm);
                visited[i] = false;
                perm.pop_back();
            }
        }
    };
};

/*
https://leetcode.com/problems/permutations-ii/
*/