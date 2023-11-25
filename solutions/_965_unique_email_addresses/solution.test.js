
const { numUniqueEmails } = require("./solution.js");
  

test(`["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]`, () => {
  const inputs = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
  const expected = 2;
  const actual = numUniqueEmails(inputs);
  expect(actual).toBe(expected);
});

test(`["a@leetcode.com","b@leetcode.com","c@leetcode.com"]`, () => {
  const inputs = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"];
  const expected = 3;
  const actual = numUniqueEmails(inputs);
  expect(actual).toBe(expected);
});

