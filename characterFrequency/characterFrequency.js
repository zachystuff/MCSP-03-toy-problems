// Write a function that takes as its input a string
// and returns an array of arrays as shown below
// sorted in descending order by frequency
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]

function characterFrequency(string) {
    let objLib;
    let resultArray;

    objLib = {};

    if(string.length === 0) {
        return []
    }

    for (const letter of string) {
        if(!objLib[letter]){
            objLib[letter] = 0
        }
        objLib[letter]++;
    }

    resultArray = Object.entries(objLib).sort((a , b) => {
        if(a[1] < b[1]){
            return 1
        }
        if(a[1] > b[1]) {
            return -1
        }
        if(a[1] === b[1]) {
            if(a[0] > b[0]) {
                return 1
            }
        }
    })
     
    return resultArray;
}

console.log(characterFrequency("aaabbc"));
console.log(characterFrequency("mississippi"));
console.log(characterFrequency(""));

