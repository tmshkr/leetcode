const { partitionLabels } = require("./solution.js");

test(`"ababcbacadefegdehijhklij"`, () => {
  expect(partitionLabels("ababcbacadefegdehijhklij")).toEqual([9,7,8]);
});

test(`"eccbbbbdec"`, () => {
  expect(partitionLabels("eccbbbbdec")).toEqual([10]);
});

