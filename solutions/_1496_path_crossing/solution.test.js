
const { isPathCrossing } = require("./solution.js");


test(`"NES"`, () => {
  const inputs = ["NES"];
  const expected = false;
  const actual = isPathCrossing(...inputs);
  expect(actual).toEqual(expected);
});

test(`"NESWW"`, () => {
  const inputs = ["NESWW"];
  const expected = true;
  const actual = isPathCrossing(...inputs);
  expect(actual).toEqual(expected);
});

