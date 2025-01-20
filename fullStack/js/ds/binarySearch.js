function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);

    if (arr[mid] == target) {
      return true;
    }

    if (arr[mid] > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return false;
}

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(testArr, 5));
