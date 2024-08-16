#include <vector>
using namespace std;

class Solution
{
public:
    int countStudents(vector<int> &students, vector<int> &sandwiches)
    {
        int studentsRemaining = students.size();
        int count[] = {0, 0};
        for (int pref : students)
        {
            count[pref]++;
        }
        for (int sandwich : sandwiches)
        {
            if (count[sandwich] == 0)
                break;
            count[sandwich]--;
            studentsRemaining--;
        }
        return studentsRemaining;
    }
};

/*
https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
*/