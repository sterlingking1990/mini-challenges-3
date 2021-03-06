/*
    steps to list sorting

    1. check if haystack is empty return -1
    2. for multi-dimensional array, perform a match check on every haystack against the needle-
        a. keep position dynamic to take the new row,col match every time
        b. if no row,col match return -1
    3. for one dimensional array, perform a match check on every haystack against the needle-
        a. keep position dynamic for the match location
        b. if no position found, return -1
*/

function listSorting(needle, haystack) {
  let positionFound = "";
  //return -1 if for a single dimensional array with length of 0 element
  if (haystack.length === 0) {
    return -1;
  }

  if (haystack[0].constructor === Array) {
    for (let i = 0; i < haystack.length; i++) {
      for (let j = 0; j < haystack[i].length; j++) {
        if (haystack[i][j] === needle) {
          positionFound = [i, j];
        }
      }
    }

    if (positionFound === "") {
      return -1;
    }
  } else {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) {
        positionFound = i;
      }
    }
    if (positionFound === "") {
      return -1;
    }
  }

  return positionFound;
}

module.exports = listSorting;
