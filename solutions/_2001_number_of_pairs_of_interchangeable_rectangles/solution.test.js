
const { interchangeableRectangles } = require("./solution.js");


test(`[[4,8],[3,6],[10,20],[15,30]]`, () => {
const inputs = [[[4,8],[3,6],[10,20],[15,30]]];
const expected = 6;
const actual = interchangeableRectangles(...inputs);
expect(actual).toEqual(expected);
});

test(`[[4,5],[7,8]]`, () => {
const inputs = [[[4,5],[7,8]]];
const expected = 0;
const actual = interchangeableRectangles(...inputs);
expect(actual).toEqual(expected);
});

