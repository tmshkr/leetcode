function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const graph = new Map();

  const clone = (node) => {
    if (!node) return null;

    if (graph.has(node.val)) {
      return graph.get(node.val);
    }

    const newNode = new Node(node.val);
    graph.set(node.val, newNode);

    for (const neighbor of node.neighbors) {
      newNode.neighbors.push(clone(neighbor));
    }

    return newNode;
  };

  return clone(node);
};

module.exports = { cloneGraph, Node };

/*
https://leetcode.com/problems/clone-graph/
*/
