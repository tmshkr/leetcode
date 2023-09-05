const { MedianFinder } = require("./code.js");

test("MedianFinder", () => {
  const finder = new MedianFinder();
  finder.addNum(1);
  finder.addNum(2);
  expect(finder.findMedian()).toBe(1.5);
  finder.addNum(3);
  expect(finder.findMedian()).toBe(2);
});
