// ********************
// ****EJERCICIO 9*****
// ********************
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}./ ********************
// ********************
// ****SOLUTION 9*****
// ********************

function findSymmetricDifference(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let exist;
  let newArray = [];

  for (let i = 0; i < n1; i++) {
    exist = false;
    for (let j = 0; j < n2; j++) {
      if (arr1[i] === arr2[j]) {
        exist = true;
      }
    }

    if (!exist) {
      newArray.push(arr1[i]);
    }
  }

  for (let i = 0; i < n2; i++) {
    exist = false;
    for (let j = 0; j < n2; j++) {
      if (arr2[i] === arr1[j]) {
        exist = true;
      }
    }

    if (!exist) {
      newArray.push(arr2[i]);
    }
  }

  return newArray;
}

//  Other solution

function symmetricDifference(setA, setB) {
  // Create a new set to store the result
  const result = new Set();

  // Loop through setA and add any elements that are not in setB to the result
  for (let elem of setA) {
    if (!setB.has(elem)) {
      result.add(elem);
    }
  }

  // Loop through setB and add any elements that are not in setA to the result
  for (let elem of setB) {
    if (!setA.has(elem)) {
      result.add(elem);
    }
  }

  // Return the result as a set
  return result;
}

// Example usage
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);
const result = symmetricDifference(setA, setB);

// OTHER SOLUTION
function findSymmetricDifference3(arr1, arr2) {
  const arr1Diff = arr1.filter((x) => !arr2.includes(x));
  const arr2Diff = arr2.filter((x) => !arr1.includes(x));
  return arr1Diff.concat(arr2Diff);
}

module.exports = findSymmetricDifference;
