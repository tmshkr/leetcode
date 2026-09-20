import { test, expect } from "vitest";
import { solution as findCircleNum } from "./solution.ts";

test(`[[1,1,0],[1,1,0],[0,0,1]]`, () => {
  const isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ];
  const expected = 2;
  const actual = findCircleNum(isConnected);
  expect(actual).toEqual(expected);
});

test(`[[1,0,0],[0,1,0],[0,0,1]]`, () => {
  const isConnected = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  const expected = 3;
  const actual = findCircleNum(isConnected);
  expect(actual).toEqual(expected);
});
