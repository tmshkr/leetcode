
const { minSubArrayLen } = require("./solution.js");


test(`7,[2,3,1,2,4,3]`, () => {
    const inputs = [7, [2, 3, 1, 2, 4, 3]];
    const expected = 2;
    const actual = minSubArrayLen(...inputs);
    expect(actual).toEqual(expected);
});

test(`4,[1,4,4]`, () => {
    const inputs = [4, [1, 4, 4]];
    const expected = 1;
    const actual = minSubArrayLen(...inputs);
    expect(actual).toEqual(expected);
});

test(`11,[1,1,1,1,1,1,1,1]`, () => {
    const inputs = [11, [1, 1, 1, 1, 1, 1, 1, 1]];
    const expected = 0;
    const actual = minSubArrayLen(...inputs);
    expect(actual).toEqual(expected);
});

