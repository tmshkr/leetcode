const { RandomizedSet } = require("./solution.js");

test(`RandomizedSet`, () => {
  const randomizedSet = new RandomizedSet();

  expect(randomizedSet.insert(1)).toEqual(true);
  expect(randomizedSet.remove(2)).toEqual(false);
  expect(randomizedSet.insert(2)).toEqual(true);
  expect([1, 2]).toContain(randomizedSet.getRandom());
  expect(randomizedSet.remove(1)).toEqual(true);
  expect(randomizedSet.insert(2)).toEqual(false);
  expect(randomizedSet.getRandom()).toEqual(2);
});
