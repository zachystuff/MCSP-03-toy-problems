/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */

Array.prototype.isSubsetOf = function (arr) {
  // your code here
  let copySubset = this.slice();
  // convert all non string elements into strings
  for (let i = 0; i < copySubset.length; i++) {
    let element = copySubset[i];
    if (typeof element !== 'string') {
      copySubset.splice(i, 1, JSON.stringify(element));
    }
  }

  let copySuperset = arr.slice();
  for (let i = 0; i < copySuperset.length; i++) {
    let element = copySuperset[i];
    if (typeof element !== 'string') {
      copySuperset.splice(i, 1, JSON.stringify(element));
    }
  }

  for(let copyEl of copySubset) {
    if(!copySuperset.includes(copyEl)) {
      return false
    }
  }

  return true
};

var a = ['commit', 'push'];
console.log(a.isSubsetOf(['commit', 'rebase', 'push', 'blame'])) // true

var b = ['merge', 'reset', 'reset', {a: 1}, [1]];

console.log(b.isSubsetOf(['reset', 'merge', 'add', 'commit', {a: 1}, [1]])) // true