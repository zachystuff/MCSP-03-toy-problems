/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

function stringConcat(first, mid, last) {
    return first + mid + last
}

var longestPalindrome = function(string) {
    const palindromeStore = [];

    if(string.length === 1) {
        return string;
    }

    for(let i = 1; i < string.length; i++) {
        if (string[i - 1] == string[i + 1]) {
            let palindrome = string[i-1] + string[i] + string[i+1];
            console.log(palindrome);
            palindromeStore.push(palindrome);
            let newIndex = string.indexOf(palindrome);
            console.log(newIndex);
            do {
                palindrome = string[newIndex - 1] + palindrome + string[palindrome.length + 1];
                palindromeStore.push(palindrome);
            } while ((string[newIndex - 1] == string[palindrome.length + 1]))
        }
    }

    return palindromeStore;
    
};

console.log(longestPalindrome("My dad is a racecar athlete"));