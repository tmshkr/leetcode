const { findItinerary } = require("./solution.js");

test(`[["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]`, () => {
  expect(
    findItinerary([
      ["MUC", "LHR"],
      ["JFK", "MUC"],
      ["SFO", "SJC"],
      ["LHR", "SFO"],
    ])
  ).toEqual(["JFK", "MUC", "LHR", "SFO", "SJC"]);
});

test(`[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]`, () => {
  expect(
    findItinerary([
      ["JFK", "SFO"],
      ["JFK", "ATL"],
      ["SFO", "ATL"],
      ["ATL", "JFK"],
      ["ATL", "SFO"],
    ])
  ).toEqual(["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]);
});
