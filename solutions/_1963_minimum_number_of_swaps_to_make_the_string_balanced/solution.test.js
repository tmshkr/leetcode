
const { minSwaps } = require("./solution.js");


test(`"][]["`, () => {
const inputs = ["][]["];
const expected = 1;
const actual = minSwaps(...inputs);
expect(actual).toEqual(expected);
});

test(`"]]][[["`, () => {
const inputs = ["]]][[["];
const expected = 2;
const actual = minSwaps(...inputs);
expect(actual).toEqual(expected);
});

test(`"[]"`, () => {
const inputs = ["[]"];
const expected = 0;
const actual = minSwaps(...inputs);
expect(actual).toEqual(expected);
});

