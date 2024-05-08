const { restoreIpAddresses } = require("./solution.js");

test(`"25525511135"`, () => {
  const inputs = ["25525511135"];
  const expected = ["255.255.11.135", "255.255.111.35"];
  const actual = restoreIpAddresses(...inputs);
  expect(actual).toEqual(expected);
});

test(`"0000"`, () => {
  const inputs = ["0000"];
  const expected = ["0.0.0.0"];
  const actual = restoreIpAddresses(...inputs);
  expect(actual).toEqual(expected);
});

test(`"101023"`, () => {
  const inputs = ["101023"];
  const expected = [
    "1.0.10.23",
    "1.0.102.3",
    "10.1.0.23",
    "10.10.2.3",
    "101.0.2.3",
  ];
  const actual = restoreIpAddresses(...inputs);
  expect(actual).toEqual(expected);
});
