function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node, map = new Map()) {
  if (!node) return null;
  if (!map.has(node)) {
    const copy = new Node(node.val);
    map.set(node, copy);
    for (const neighbor of node.neighbors) {
      copy.neighbors.push(cloneGraph(neighbor, map));
    }
  }

  return map.get(node);
};

module.exports = { cloneGraph, Node };

/*
https://leetcode.com/problems/clone-graph/
*/
