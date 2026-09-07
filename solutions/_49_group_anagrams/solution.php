
<?php

class Solution {

    /**
     * @param String[] $strs
     * @return String[][]
     */
    function groupAnagrams($strs) {
        $map = [];
        foreach ($strs as $str) {
            $key = str_split($str);
            sort($key);
            $key = implode("", $key);
            if (!isset($map[$key])) {
                $map[$key] = [];
            }
            $map[$key][] = $str;
        }
        return array_values($map);
    }
}

/*
https://leetcode.com/problems/group-anagrams/
*/
