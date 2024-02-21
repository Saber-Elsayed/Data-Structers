/* Write your class below */
class Stack {
  constructor() {
    this.stack = [];
    this.stackLength = 0;
  }
  push(value) {
    this.stack[this.stackLength] = value;
    this.stackLength++;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    } else {
      this.stackLength--;
      return delete this.stack[this.stackLength];
    }
  }
  isEmpty() {
    if (this.stackLength === 0) {
      return true;
    } else {
      return false;
    }
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stackLength - 1];
  }
  print() {
    console.log(this.stack);
  }
}

//You can paste the test code from the lesson below to test your solution

let myStack = new Stack();
console.log(myStack.isEmpty()); //true
myStack.print(); //[]
myStack.push(2);
console.log(myStack.isEmpty()); //false
myStack.push(4);
myStack.print(); //[2,4]
console.log(myStack.peek()); //4
myStack.pop();
myStack.pop();
console.log(myStack.peek()); //null
console.log(myStack.isEmpty()); //true
