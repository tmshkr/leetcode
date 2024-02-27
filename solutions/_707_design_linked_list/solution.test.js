
const { MyLinkedList } = require("./solution.js");

test(`MyLinkedList`, () => {
const myLinkedList = new MyLinkedList();

  myLinkedList.addAtHead(1);
  myLinkedList.addAtTail(3);
  myLinkedList.addAtIndex(1,2);
  expect(myLinkedList.get(1)).toEqual(2);
  myLinkedList.deleteAtIndex(1);
  expect(myLinkedList.get(1)).toEqual(3);
});
