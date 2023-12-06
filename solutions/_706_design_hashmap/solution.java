package _706_design_hashmap;

class Node {

  int key, val;
  Node next;

  public Node(int key, int val, Node next) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class MyHashMap {

  static final int size = 19997;
  static final int mult = 12582917;
  Node[] data;

  public MyHashMap() {
    this.data = new Node[size];
  }

  private int hash(int key) {
    return (int) (((long) key * mult) % size);
  }

  public void put(int key, int val) {
    remove(key);
    int h = hash(key);
    Node node = new Node(key, val, data[h]);
    data[h] = node;
  }

  public int get(int key) {
    int h = hash(key);
    Node node = data[h];
    while (node != null) {
      if (node.key == key) {
        return node.val;
      }
      node = node.next;
    }

    return -1;
  }

  public void remove(int key) {
    int h = hash(key);
    Node node = data[h];
    if (node == null) return;
    if (node.key == key) {
      data[h] = node.next;
    } else {
      while (node.next != null) {
        if (node.next.key == key) {
          node.next = node.next.next;
          return;
        }
        node = node.next;
      }
    }
  }
}
