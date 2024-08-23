console.log("running binary search file....");

// =================================
// Iterative
// =================================

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] == target) {
      return arr[mid];
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));

// =================================
// RECURSIVE
// =================================

function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) return -1;

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] == target) {
    return arr[mid];
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, low, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, high);
  }
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
