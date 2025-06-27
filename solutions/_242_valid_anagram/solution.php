<?php

class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Boolean
     */
    function isAnagram($s, $t) {
        $n = strlen($s);
        $m = strlen($t);
        if ($n !== $m) {
            return false;
        }

        $count = array_fill(0, 26, 0);
        for ($i = 0; $i < $n; $i++) {
            $count[ord($s[$i]) - ord('a')]++;
            $count[ord($t[$i]) - ord('a')]--;
        }
        
        for ($i = 0; $i < 26; $i++) {
            if ($count[$i] !== 0) {
                return false;
            }
        }

        return true;
    }
}

/*
https://leetcode.com/problems/valid-anagram/
*/