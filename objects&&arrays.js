class UniqueArray {
  constructor() {
    this.arr = [];
    this.items = {};
  }
  add(item) {
    if (!this.exists(item)) {
      this.arr.push(item);
      this.items[item] = this.arr.length;
    }
  }

  showAll() {
    return this.arr;
  }

  exists(item) {
    if (this.items[item]) {
      return true;
    } else {
      return false;
    }
  }

  get(index) {
    if (index >= 0 && index < this.arr.length) {
      return this.arr[index];
    } else {
      console.log("-1");
    }
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
console.log(uniqueStuff.showAll()); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
console.log(uniqueStuff.exists("toy")); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"
