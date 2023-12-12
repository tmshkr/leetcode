
const { leastBricks } = require("./solution.js");


test(`[[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]`, () => {
const inputs = [[[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]];
const expected = 2;
const actual = leastBricks(...inputs);
expect(actual).toEqual(expected);
});

test(`[[1],[1],[1]]`, () => {
const inputs = [[[1],[1],[1]]];
const expected = 3;
const actual = leastBricks(...inputs);
expect(actual).toEqual(expected);
});

