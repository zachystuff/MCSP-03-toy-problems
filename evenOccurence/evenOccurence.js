/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

var evenOccurrence = function(arr) {
  //create a dictionary object
  let result = null;
  let dict = {};
  //loop through array
  for (let i = 0; i < arr.length; i++) {
    //determine if that item in the array is already in the object as a key
    if (dict[arr[i]]) {
      //if yes, increment the value
      result = arr[i];
      dict[arr[i]] = 2;
      //if not, add it as a key to the object with a value of 1
    } else {
      dict[arr[i]] = 1;
    }
  }
  //loop through object and return the first instance of value greater than 1
  for (let key in dict) {
    if (dict[key] === 2) {
      if (Number(key)) {
        return Number(key);
      } else {
        return key;
      }
    }
  }
  return result;
};
