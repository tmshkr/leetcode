/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let studentsRemaining = students.length;
  const count = [0, 0];
  for (const pref of students) {
    count[pref]++;
  }

  for (const sandwich of sandwiches) {
    if (count[sandwich] === 0) break;
    count[sandwich]--;
    studentsRemaining--;
  }

  return studentsRemaining;
};

module.exports = { countStudents };

/*
https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
*/
