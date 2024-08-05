const { destCity } = require("./solution.js");

test(`[["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]`, () => {
  const inputs = [
    [
      ["London", "New York"],
      ["New York", "Lima"],
      ["Lima", "Sao Paulo"],
    ],
  ];
  const expected = "Sao Paulo";
  const actual = destCity(...inputs);
  expect(actual).toEqual(expected);
});

test(`[["B","C"],["D","B"],["C","A"]]`, () => {
  const inputs = [
    [
      ["B", "C"],
      ["D", "B"],
      ["C", "A"],
    ],
  ];
  const expected = "A";
  const actual = destCity(...inputs);
  expect(actual).toEqual(expected);
});

test(`[["A","Z"]]`, () => {
  const inputs = [[["A", "Z"]]];
  const expected = "Z";
  const actual = destCity(...inputs);
  expect(actual).toEqual(expected);
});
