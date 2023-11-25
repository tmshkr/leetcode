package _965_unique_email_addresses;

import java.util.*;

class Solution {

  public int numUniqueEmails(String[] emails) {
    Set<String> uniqueEmails = new HashSet<>();
    for (String email : emails) {
      String[] names = email.split("@");
      String local = names[0];
      String domain = names[1];

      local = local.split("\\+")[0].replace(".", "");
      uniqueEmails.add(local + "@" + domain);
    }
    return uniqueEmails.size();
  }
}
/*
https://leetcode.com/problems/unique-email-addresses/
*/
