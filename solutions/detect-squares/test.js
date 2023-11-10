const { DetectSquares } = require("./solution.js");

test(`DetectSquares`, () => {
  const detectSquares = new DetectSquares();
  detectSquares.add([3, 10]);
  detectSquares.add([11, 2]);
  detectSquares.add([3, 2]);
  expect(detectSquares.count([11, 10])).toEqual(1);
  expect(detectSquares.count([14, 8])).toEqual(0);
  detectSquares.add([11, 2]);
  expect(detectSquares.count([11, 10])).toEqual(2);
});
