
<?php

class Solution {

    /**
     * @param Integer[][] $isConnected
     * @return Integer
     */
    function findCircleNum($isConnected) {
        $numCities = count($isConnected);
        $visited = [];
        $numProvinces = 0;

        for ($i = 0; $i < $numCities; $i++) {
            if (!isset($visited[$i])) {
                $this->dfs($isConnected, $visited, $i);
                $numProvinces++;
            }
        }

        return $numProvinces;
    }

    private function dfs($isConnected, &$visited, $i) {
        $visited[$i] = true;
        for ($j = 0; $j < count($isConnected); $j++) {
            if ($isConnected[$i][$j] === 1 && !isset($visited[$j])) {
                $this->dfs($isConnected, $visited, $j);
            }
        }
    }
}

/*
https://leetcode.com/problems/number-of-provinces/
*/
