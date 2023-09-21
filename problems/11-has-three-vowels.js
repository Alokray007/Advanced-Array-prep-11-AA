/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    let chars = string.split("");

    function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
    }
    let unique = chars.filter(onlyUnique);

    let vowel = "aeiou";
    let count = 0;
    unique.forEach((v) => {
        if(vowel.includes(v)) {
            count++;
        }
    });
    if (count >= 3) {
        return true;
    } else {
        return false;
    }
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
