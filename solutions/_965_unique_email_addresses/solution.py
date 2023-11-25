from typing import List


class Solution:
    def numUniqueEmails(self, emails: list[str]) -> int:
        unique_emails: set[str] = set()
        for email in emails:
            local, domain = email.split("@")
            local = local.split("+")[0].replace(".", "")
            unique_emails.add(local + "@" + domain)
        return len(unique_emails)


# https://leetcode.com/problems/unique-email-addresses/
