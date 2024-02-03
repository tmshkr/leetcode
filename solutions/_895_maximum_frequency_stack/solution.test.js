
const { FreqStack } = require("./solution.js");

test(`FreqStack`, () => {
const freqStack = new FreqStack();

  freqStack.push(5);
  freqStack.push(7);
  freqStack.push(5);
  freqStack.push(7);
  freqStack.push(4);
  freqStack.push(5);
  expect(freqStack.pop()).toEqual(5);
  expect(freqStack.pop()).toEqual(7);
  expect(freqStack.pop()).toEqual(5);
  expect(freqStack.pop()).toEqual(4);
});
