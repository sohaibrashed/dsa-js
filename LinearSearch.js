console.log("running linear search file....");

// ====================
// ITERATIVE
// ====================

function linearSearch(arr, target) {
  for (let el of arr) {
    if (el === target) return el;
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));

// ====================
// RECURSIVE
// ====================

function linearSearchRecursive(arr, target, index = 0) {
  if (index >= arr.length) return -1;

  if (arr[index] === target) return arr[index];

  return linearSearchRecursive(arr, target, index + 1);
}

console.log(linearSearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
console.log(linearSearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
