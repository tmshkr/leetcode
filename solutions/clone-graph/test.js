const { cloneGraph, Node } = require("./solution.js");

function createGraph(adjList) {
  const graph = [];
  for (let i = 0; i < adjList.length; i++) {
    graph.push(new Node(i + 1));
  }
  for (let i = 0; i < adjList.length; i++) {
    const node = graph[i];
    for (const neighbor of adjList[i]) {
      node.neighbors.push(graph[neighbor - 1]);
    }
  }

  return graph[0];
}

function compare(a, b) {
  if (!a && !b) return;
  if (a.visited && b.visited) return;
  a.visited = true;
  b.visited = true;

  expect(a.val).toEqual(b.val);
  expect(a.neighbors.length).toEqual(b.neighbors.length);
  for (let i = 0; i < a.neighbors.length; i++) {
    compare(a.neighbors[i], b.neighbors[i]);
  }
}

test(`[[2,4],[1,3],[2,4],[1,3]]`, () => {
  const res = cloneGraph(
    createGraph([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ])
  );

  compare(
    res,
    createGraph([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ])
  );
});

test(`[[]]`, () => {
  const res = cloneGraph(createGraph([[]]));
  compare(res, createGraph([[]]));
});

test(`[]`, () => {
  const res = cloneGraph(createGraph([]));
  compare(res, createGraph([]));
});
