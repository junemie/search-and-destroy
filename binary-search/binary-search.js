"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  //defining rootIndex
  let rootIndex;
  if (array.length % 2 === 1) {
    rootIndex = Math.round(array.length - 1) / 2;
  } else {
    rootIndex = array.length / 2;
  }
  let currentRoot = array[rootIndex];
  // console.log(currentRoot, "CURRENT ROOT");
  let left = array.slice(0, rootIndex);
  // console.log(left, "LEFT");
  let right = array.slice(rootIndex);

  if (target === currentRoot) return true;
  if (target > currentRoot) {
    // let recursiveVal = binarySearch(left, target);
    // console.log(recursiveVal);
    // return recursiveVal;
  } else {
    // let recursiveVal = binarySearch(right, target);
    // console.log(recursiveVal);
    // return binarySearch(left, target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
