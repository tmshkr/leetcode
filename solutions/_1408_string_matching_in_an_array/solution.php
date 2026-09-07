
<?php

class Solution {

    /**
     * @param String[] $words
     * @return String[]
     */
    function stringMatching($words) {
        $result = [];
        foreach ($words as $i => $word) {
            foreach ($words as $j => $other) {
                if ($i !== $j && strpos($other, $word) !== false) {
                    $result[] = $word;
                    break;
                }
            }
        }
        return $result;
    }
}

/*
https://leetcode.com/problems/string-matching-in-an-array/
*/
