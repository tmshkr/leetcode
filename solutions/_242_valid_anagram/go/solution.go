package _242_valid_anagram

func isAnagram(s string, t string) bool {
	n := len(s)
	m := len(t)
	if n != m {
		return false
	}

	count := make([]int, 26)
	for i := 0; i < n; i++ {
		count[s[i]-'a']++
		count[t[i]-'a']--
	}

	for i := 0; i < 26; i++ {
		if count[i] != 0 {
			return false
		}
	}
	return true
}
  
/*
https://leetcode.com/problems/valid-anagram/
*/
