
const { assignTasks } = require("./solution.js");


test(`[3,3,2],[1,2,3,2,1,2]`, () => {
  const inputs = [[3,3,2],[1,2,3,2,1,2]];
  const expected = [2,2,0,2,1,2];
  const actual = assignTasks(...inputs);
  expect(actual).toEqual(expected);
});

test(`[5,1,4,3,2],[2,1,2,4,5,2,1]`, () => {
  const inputs = [[5,1,4,3,2],[2,1,2,4,5,2,1]];
  const expected = [1,4,1,4,1,3,2];
  const actual = assignTasks(...inputs);
  expect(actual).toEqual(expected);
});

