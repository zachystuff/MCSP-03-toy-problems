// Write a function named findSum

// findSum takes one parameter, a number
// Upto and including n, this function will 
// return the sum of all multiples of 3 and 5.

// EXAMPLE
/**
 * findSum(5) should return 8. (3 + 5)
 * findsum(10) should return 33. (3 + 5 + 6 + 9 + 10)
 */

function findSum(n){
  let sum = 0;
  for(let i = 3; i <= n; i++){
    if((i % 3 === 0) || (i % 5 === 0)){
      sum += 1;
    }
  }
  return sum;
}