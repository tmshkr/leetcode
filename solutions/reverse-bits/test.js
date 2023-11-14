const { reverseBits } = require("./solution.js");

test(`00000010100101000001111010011100`, () => {
  const original = 0b00000010100101000001111010011100;
  const reversed = 0b00111001011110000010100101000000;
  expect(reverseBits(original)).toEqual(reversed);
});

test(`11111111111111111111111111111101`, () => {
  const original = 0b11111111111111111111111111111101;
  const reversed = 0b10111111111111111111111111111111;
  expect(reverseBits(original)).toEqual(reversed);
});
