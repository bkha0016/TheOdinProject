// Using iteration, write a fn fibs which takes a number and retunrs an array containing that many numbers from the Fibonacci sequence
// input of 8 result => [0, 1, 1, 2, 3, 5, 8, 13]

function fibs(n) {
  let numA = 1;
  let numB = 0;
  let temp = 0;
  let arr = [];
  let i = 0;
  while (i < n) {
    temp = numA; // 1, 1, 2
    numA = numA + numB; // 1 + 0, 1 + 1, 2 + 1,
    arr.push(numB); // 0, 1, 2, 3
    numB = temp; // 1, 1

    i++;
  }

  return console.log(arr);
}

fibs(8);
/* 
[0, 1, 1, 2, 3, 5, 8, 13]
start by simple input cases

n = 1
[0]

n = 2
[0, 1]

n = 3 
[0, 1, 1]

n = 4
[0, 1 ,1, 2]




*/

function fibsRec(n) {
  if (n == 1) return [0];

  if (n == 2) return [0, 1];

  //   Recursive case
  const fibsArr = fibsRec(n - 1); // Get the array for n-1 Fibonacci numbers
  const nextFib = fibsArr[fibsArr.length - 1] + fibsArr[fibsArr.length - 2];
  fibsArr.push(nextFib);

  return fibsArr;
}

console.log(fibsRec(8));

/* 
fibsRecNum
0 = 0
0, 1 = 1
0, 1, 1 = 2
0, 1, 1, 2 = 4
0, 1, 1, 2, 3 = 7

start by simple inputing
n = 0
0
n = 1
1
n = 2
2
n = 3
4
n = 4
7

*/

function fibsRecNum(n) {
  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  return fibsRecNum(n - 1) + fibsRecNum(n - 2);
}

console.log(fibsRecNum(8));

function iterativeMergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let sorted = arr.map((item) => [item]); // Each element is a sub-array

  while (sorted.length > 1) {
    let temp = [];

    for (let i = 0; i < sorted.length; i += 2) {
      if (i + 1 < sorted.length) {
        temp.push(merge(sorted[i], sorted[i + 1]));
      } else {
        temp.push(sorted[i]);
      }
    }
    sorted = temp;
  }

  return sorted[0];
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// merge sort example
const arr = [34, 7, 23, 32, 5, 62];
console.log(iterativeMergeSort(arr));
console.log(mergeSort(arr));
