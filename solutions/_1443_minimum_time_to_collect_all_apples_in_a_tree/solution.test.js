const { minTime } = require("./solution.js");

test(`7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,true,true,false]`, () => {
  const inputs = [
    7,
    [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ],
    [false, false, true, false, true, true, false],
  ];
  const expected = 8;
  const actual = minTime(...inputs);
  expect(actual).toEqual(expected);
});

test(`7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,false,true,false]`, () => {
  const inputs = [
    7,
    [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ],
    [false, false, true, false, false, true, false],
  ];
  const expected = 6;
  const actual = minTime(...inputs);
  expect(actual).toEqual(expected);
});

test(`7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,false,false,false,false,false]`, () => {
  const inputs = [
    7,
    [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ],
    [false, false, false, false, false, false, false],
  ];
  const expected = 0;
  const actual = minTime(...inputs);
  expect(actual).toEqual(expected);
});
