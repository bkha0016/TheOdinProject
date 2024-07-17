function sumRange(x) {
  if (x == 1) {
    return 1;
  }
  return x + sumRange(x - 1);
}

console.log(sumRange(3));

function power(x, n) {
  if (n == 1) {
    return x;
  }

  return x * power(x, n - 1);
}
console.log(power(2, 4));

function factorial(x) {
  if (x == 1) {
    return 1;
  }

  return x * factorial(x - 1);
}

function all(list, num) {
  if (list[0] > num) {
    return false;
  }
  list = list.slice(1); // From index 1 to the end
  return all(list, num);
}

console.log(all([1, 2, 9], 7));

function allCallback(arr, callback) {
  // Base case: if the array is empty, return true
  if (arr.length === 0) {
    return true;
  }

  // Check the first element with the call back
  if (!callback(arr[0])) {
    return false;
  }

  return allCallback(arr.slice(1), callback);
}

const isEven = (num) => num % 2 === 0;
const arr1 = [2, 4, 6, 8];
const arr2 = [2, 3, 6, 8];

console.log(allCallback(arr1, isEven));
console.log(allCallback(arr2, isEven));

function productOfArray(list) {
  if (list.length === 0) {
    return 1;
  }
  return list[0] * productOfArray(list.slice(1));
}

console.log(productOfArray([1, 2, 3, 10]));

// function called contains that searches for a value in a nested object. It retunrs true if the object contains that value
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function contains(obj, value) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    }

    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

console.log(contains(nestedObject, 44)); // true
console.log(contains(nestedObject, "foo")); // false

function SumSquares(array) {
  if (array.length === 0) return 0;
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += SumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }

  return total;
}
