/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const uniqueEmails = new Set();
  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    let [local, domain] = email.split("@");
    local = local.split("+")[0].replace(/\./g, "");
    uniqueEmails.add(`${local}@${domain}`);
  }
  return uniqueEmails.size;
};

module.exports = { numUniqueEmails };

/*
https://leetcode.com/problems/unique-email-addresses/
*/
