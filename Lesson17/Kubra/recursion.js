// 1. Write a recursive function to print out all the elements of an array.

const arr=[1,2,3];

function printArr(array, index = 0){
  if (index === array.length) {
    return;
  } else {
    console.log(array[index]);
    printArr(array, index + 1);
  }
  // printArr([1,2,3],0) -> 1
  // printArr([1,2,3],1) -> 2
  // printArr([1,2,3],2) -> 3
  // printArr([1,2,3], 3) -> 
}

printArr(arr);
printArr([1,2,4,2,12]);


// 2. Write a recursive function to capitalize the first letter of each word in a sentence.
const ex2sentence = 'a recursive function to capitalize the first letter of each word in a sentence.';

// function capitalizeFirstLetterInASentence(sentence) {
//   const sentenceArray = sentence.split(' ');
//   console.log(sentenceArray);
//   let modifiedArray = [];

//   capitalizeFirstLetter(sentenceArray);

//   return modifiedArray.join(' ');
// }

// function capitalizeFirstLetter(arrayOfWords, index = 0) {
//   if (index === arrayOfWords.length) {
//     return;
//   } else {
//     const currentWord = arrayOfWords[index];
//     console.log(currentWord.charAt(0).toUpperCase() + currentWord.slice(1));
//     capitalizeFirstLetter(arrayOfWords, index + 1);
//   }
// }

function capitalizeFirstLetterInASentence(sentence) {
  if (typeof sentence !== 'string' || sentence === '') {
    return '';
  } else {
    const indexOfFirstSpace = sentence.indexOf(' ');
    let currentWord, restOfSentence;
    if (indexOfFirstSpace === -1) {
      currentWord = sentence;
      restOfSentence = '';
    } else {
      currentWord = sentence.slice(0, indexOfFirstSpace);
      restOfSentence = sentence.slice(indexOfFirstSpace+1);
    }

    const firstLetter = currentWord.charAt(0);
    const restOfTheWord = currentWord.slice(1);
    const capitalizedWord = firstLetter.toUpperCase() + restOfTheWord;
    // Sentece + capitalizeFirstLetterInASentence('');
    return capitalizedWord + ' ' + capitalizeFirstLetterInASentence(restOfSentence);
  }
}

console.log(capitalizeFirstLetterInASentence(ex2sentence));

// 3. Write a recursive function to flatten an object with nested objects into a single-level object.
// 4. Write a recursive function to count the number of vowels in a string.
// 5. Write a recursive function to remove all occurrences of a specified character from a string.
// 6. Write a recursive function to check if an array includes a specific value.
// 7. Write a recursive function to find the maximum depth of a nested object.
// 8. Write a recursive function to reverse the order of words in a sentence.
// 9. Write a recursive function to find the length of the longest word in a sentence.
// 10. Write a recursive function to generate all possible permutations of a string.
// 11. Write a recursive function to replace all occurrences of a specified character with another character in a string.
// 12. Write a recursive function to check if a string is a valid palindrome, ignoring non-alphanumeric characters.
// 13. Write a recursive function to remove all duplicates from an array.
// 14. Write a recursive function to flatten a nested array with arbitrary levels of nesting.
// 15. Write a recursive function to check if an object contains a specified property.
// 16. Write a recursive function to find the first occurrence of a specified value in an array.
// 17. Write a recursive function to find the number of occurrences of a specified value in an array.
// 18. Write a recursive function to find the sum of all values in an object with nested objects.
// 19. Write a recursive function to create a new array with all the unique values of an input array.
// 20. Write a recursive function to merge two sorted arrays into a new sorted array.