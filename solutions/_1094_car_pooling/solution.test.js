
const { carPooling } = require("./solution.js");


test(`[[2,1,5],[3,3,7]],4`, () => {
  const inputs = [[[2,1,5],[3,3,7]],4];
  const expected = false;
  const actual = carPooling(...inputs);
  expect(actual).toEqual(expected);
});

test(`[[2,1,5],[3,3,7]],5`, () => {
  const inputs = [[[2,1,5],[3,3,7]],5];
  const expected = true;
  const actual = carPooling(...inputs);
  expect(actual).toEqual(expected);
});

