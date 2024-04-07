
package _427_construct_quad_tree;

class Solution {
    int[][] grid;

    public Node construct(int[][] grid) {
        this.grid = grid;
        return construct(0, 0, grid.length);
    }

    private Node construct(int row, int col, int n) {
        if (n == 1) {
            return new Node(grid[row][col] == 1, true);
        }

        if (isLeaf(row, col, n)) {
            return new Node(grid[row][col] == 1, true);
        }

        n /= 2;
        return new Node(true, false,
                construct(row, col, n),
                construct(row, col + n, n),
                construct(row + n, col, n),
                construct(row + n, col + n, n));
    }

    private boolean isLeaf(int row, int col, int n) {
        int val = grid[row][col];
        for (int i = row; i < row + n; i++) {
            for (int j = col; j < col + n; j++) {
                if (grid[i][j] != val) {
                    return false;
                }
            }
        }
        return true;
    }
}

/*
 * https://leetcode.com/problems/construct-quad-tree/
 */