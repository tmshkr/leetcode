
const { StockSpanner } = require("./solution.js");

test(`StockSpanner`, () => {
  const stockSpanner = new StockSpanner();
  expect(stockSpanner.next(100)).toEqual(1);
  expect(stockSpanner.next(80)).toEqual(1);
  expect(stockSpanner.next(60)).toEqual(1);
  expect(stockSpanner.next(70)).toEqual(2);
  expect(stockSpanner.next(60)).toEqual(1);
  expect(stockSpanner.next(75)).toEqual(4);
  expect(stockSpanner.next(85)).toEqual(6);
});
