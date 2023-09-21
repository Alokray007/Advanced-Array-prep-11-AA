/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

// function repeatingTranslate(sentence) {
//     const words = sentence.split(' ');

//     function isVowel(char) {
//         const vowels = 'aeiouAEIOU';
//         return vowels.includes(char);
//     }

//     const translatedWords = words.map(word => {
//         if (word.length < 3) {
//             return word;
//         } else {
//             const lastChar = word[word.length - 1];
//             const lastVowelIndex = word.split('').findIndex(isVowel);

//             if (lastVowelIndex === -1) {
//                 return word + word;
//             } else if (isVowel(lastChar)) {
//                 return word + word;
//             } else {
//                 return word + word.slice(lastVowelIndex);
//             }
//         }
//     });

//     return translatedWords.join(' ');
// }

function repeatingTranslate(sentence) {
    let words = sentence.split(" ");
    let vowel = "aeiou";
    let arr = [];
    words.forEach((word) => {
        if (word.length < 3) {
            arr.push(word);
        }
        else if (vowel.includes(word[word.length-1])) {
            arr.push(word + word)
        }
        else if (!vowel.includes(word[word.length-1])) {
            let newwords = removeLastVowel(word);
            arr.push(newwords)
        }
    });
  return arr.join(" ");
}

function removeLastVowel(word) {
    let vowel = "aeiou";
    for (let i=word.length; i >=0  ; i--) {
        if (vowel.includes(word[i])) {
            return word + word.slice(i)
        }
    }
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}
