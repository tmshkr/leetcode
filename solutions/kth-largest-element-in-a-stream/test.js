const { KthLargest } = require("./code.js");

test("KthLargest", () => {
  const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
  expect(kthLargest.add(3)).toBe(4); // return 4
  expect(kthLargest.add(5)).toBe(5); // return 5
  expect(kthLargest.add(10)).toBe(5); // return 5
  expect(kthLargest.add(9)).toBe(8); // return 8
  expect(kthLargest.add(4)).toBe(8); // return 8
});
