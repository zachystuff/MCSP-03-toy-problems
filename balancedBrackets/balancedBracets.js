// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false 
// str: "[{]}"                    |   false
const isBalanced = str => {
    const store = [];
    for(let i of str) { 
        console.log(i)
        if (i == '(' || i == '[' || i == '{') {
            store.push(i)
        }
        if (i == ')') {
            if (store[store.length - 1] == '(') {
                store.pop();
            }
        }
        if (i == ']') {
            if(store[store.length - 1] == '[') {
                store.pop();
            }
        }
        if(i == '}') {
            
        }  
            
    }
    console.log(store);
    return !(store.length > 0);
};

console.log(isBalanced("(x + y) - (4)"))
console.log(isBalanced("[{]}"))
console.log(isBalanced("(x + y) - (4)"))
console.log(isBalanced("(x + y) - (4)"))
console.log(isBalanced("(x + y) - (4)"))