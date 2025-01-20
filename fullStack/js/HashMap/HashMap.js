class HashMap {
  constructor(size = 53) {
    this.keyMap = new Array(size);
    this.size = 0; // keep track of the number of key-value pairs
  }

  // hash(key) takes a key and produces a hash code with it
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  // set(key, value) takes two arguments, the first is a key and the second is a value
  // that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key's value
  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    let replaced = false;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        replaced = true;
        break;
      }
    }
    if (!replaced) {
      this.keyMap[index].push([key, value]);
      this.size++;
    }
  }

  // retrieve a value by its key
  get(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return null;
  }

  // has(key) takes a key as an arguement and returns true or false based on whether or not they key is in the hash map
  has(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  // If the given key is in the hash map, it should remove the entry with that key and return true
  // If the key isn't in the hash map, it should return false
  remove(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }

  // length() returns the number of stored keys in the hash map
  length() {
    return this.size;
  }

  // clear() remove all entries from the hash map
  clear() {
    this.keyMap = new Array(this.keyMap.length);
    this.size = 0;
  }

  // keys() returns an array containing all the keys inside the hash map
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }

  // values() retrieve all values in the hash map
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }

  // Retrieve all key-value pairs in the hash map
  entries() {
    let entriesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          entriesArr.push(this.keyMap[i][j]);
        }
      }
    }
    return entriesArr;
  }
}

const hashMap = new HashMap();
hashMap.set("name", "John");
hashMap.set("age", 30);
hashMap.set("city", "New York");

console.log(hashMap.get("name")); // Output: John
console.log(hashMap.get("age")); // Output: 30
console.log(hashMap.get("city")); // Output: New York

console.log(hashMap.keys()); // Output: ['name', 'age', 'city']
console.log(hashMap.values()); // Output: ['John', 30, 'New York']

console.log(hashMap.remove("age")); // Output: 30
console.log(hashMap.get("age")); // Output: null

console.log(hashMap.length()); // Output: 2

hashMap.clear();
console.log(hashMap.length()); // Output: 0
console.log(hashMap.keys()); // Output: []

// Testing the entries method
hashMap.set("name", "John");
hashMap.set("age", 30);
console.log(hashMap.entries()); // Output: [['name', 'John'], ['age', 30]]
