/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
//  * Example: commonCharacters('acexivou', 'aegihobu')
//  * Returns: 'aeiou'
//  *
//  * Extra credit: Extend your function to handle more than two input strings.
 */


const commonCharacters = function (string1, string2) {
    // TODO: Your code here!
    let compareObj = {};
    let result = [];
    
    for(const letter1 of string1) {
        if(!compareObj[letter1]) {
            compareObj[letter1] = 0;
        }
    }
    for(const letter2 of string2) {
        if (compareObj[letter2] === 0) {
            compareObj[letter2]++;
        } 
    }

    for (const key in compareObj) {
        if(compareObj[key] === 1) {
            result.push(key);
        }
    }

    return result.join('');
    
};

console.log(commonCharacters('acexivou', 'aegihobu'));