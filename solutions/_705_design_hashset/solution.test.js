const { MyHashSet } = require("./solution.js");

test(`MyHashSet`, () => {
  const myHashSet = new MyHashSet();

  myHashSet.add(1);
  myHashSet.add(2);
  expect(myHashSet.contains(1)).toEqual(true);
  myHashSet.contains(3);
  myHashSet.add(2);
  expect(myHashSet.contains(2)).toEqual(true);
  myHashSet.remove(2);
  myHashSet.contains(2);
});
