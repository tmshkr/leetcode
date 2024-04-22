package _1993_operations_on_tree;

import java.util.*;

class LockingTree {
    int[] parent;
    Integer[] locked;
    List<List<Integer>> children;

    public LockingTree(int[] parent) {
        this.parent = parent;
        this.locked = new Integer[parent.length];
        this.children = new ArrayList<>(parent.length);
        for (int i = 0; i < parent.length; i++) {
            this.children.add(new ArrayList<>());
        }
        for (int i = 0; i < parent.length; i++) {
            int p = parent[i];
            if (p != -1) {
                this.children.get(p).add(i);
            }
        }
    }

    public boolean lock(int num, int user) {
        if (this.locked[num] != null) {
            return false;
        }
        this.locked[num] = user;
        return true;

    }

    public boolean unlock(int num, int user) {
        if (this.locked[num] == null || this.locked[num] != user) {
            return false;
        }
        this.locked[num] = null;
        return true;
    }

    public boolean upgrade(int num, int user) {
        int i = num;
        while (i != -1) {
            if (this.locked[i] != null) {
                return false;
            }
            i = this.parent[i];
        }
        int count = 0;
        Queue<Integer> q = new LinkedList<>();
        q.add(num);
        while (!q.isEmpty()) {
            int n = q.poll();
            if (this.locked[n] != null) {
                this.locked[n] = null;
                count++;
            }
            for (int j = 0; j < this.children.get(n).size(); j++) {
                q.add(this.children.get(n).get(j));
            }
        }
        if (count > 0) {
            this.locked[num] = user;
        }
        return count > 0;
    }
}

/*
 * https://leetcode.com/problems/operations-on-tree/
 */