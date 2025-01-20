function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}

console.log(pow(2, 3));

function sumTo(x) {
  return x == 1 ? x : x + sumTo(x - 1);
}

console.log(sumTo(4));

function factorial(x) {
  return x == 1 ? x : x * factorial(x - 1);
}

console.log(factorial(5));

function fib(x) {
  if (x <= 1) {
    return x;
  }

  return fib(x - 1) + fib(x - 2);
}

console.log(fib(7));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// This is using recursive

function printListRecursive(list) {
  if (list.next === null) {
    return console.log(list.value);
  }

  return console.log(list.value) + printListRecursive(list.next);
}

printListRecursive(list);

// printing singly linked list using for loop or while

function printList(list) {
  while (list.next !== null) {
    console.log(list.value);
    list = list.next;
  }
  console.log(list.value);
}

printList(list);

// Output a singly linked list in the reverse order
function printReverseListRecursive(list) {
  if (list.next === null) {
    return console.log(list.value);
  }

  return printReverseListRecursive(list.next) + console.log(list.value);
}

printReverseListRecursive(list);

// Output a singly linked list in a reverse order but using loop
function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseList(list);
