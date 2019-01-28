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
  //base case
  if (array[rootIndex] === target) {
    return true;
  } else if (target > array[rootIndex]) {
    let right = array[rootIndex + 1];
    // return binarySearch(array.slice(right), target);
  } else {
    let left = array[rootIndex - 1];
    console.log(left);
    // console.log("left array slice", array.slice(0, rootIndex));
    let recursiveVal = binarySearch(array.slice(0, rootIndex), target);
    console.log(recursiveVal);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
