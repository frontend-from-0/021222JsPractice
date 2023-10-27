// We did not manage to do the exercises in the Lesson 15 so we do them in the lesson 16 instead. This is the reason Lesson15 directory is not present.

// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const arr = [1, 2, 3, 4];
const result = sumArray(arr);
console.log(result);

console.log('----------------------------');
// 2. Write a function that takes an array of integers and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5

function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const arr2 = [1, 2, 3, 4];
const average = calculateAverage(arr2);
console.log(average);

console.log('----------------------------');
// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World!"

function exercise3(arr) {
    return arr.join(' ');
}

const strings = ["Hello", "World", "!"];
const concatenatedString = exercise3(strings);
console.log(concatenatedString);

console.log('----------------------------');
// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10];
// Output: [1, 3, 7]

function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

const numbers = [1, 2, 3, 4, 7, 10];
const oddNumbers = filterOddNumbers(numbers);
console.log(oddNumbers);


console.log('----------------------------');
// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10]

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

const numbersArray = [1, 2, 3, 4, 7, 10];
const evenNumbers = filterEvenNumbers(numbersArray);
console.log(evenNumbers);

console.log('----------------------------');
// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2, 3, 4, 2], 2)
// Output: [1, 3, 4]

function removeOccurrences(arr, value) {
    return arr.filter(item => item !== value);
}

const originalArray = [1, 2, 3, 4, 2];
const valueToRemove = 2;
const newArray = removeOccurrences(originalArray, valueToRemove);
console.log(newArray);

console.log('----------------------------');
// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]

function getKeys(obj) {
    return Object.keys(obj);
}

const exampleObject = { name: "John", age: 30, city: "New York" };
const keysArray = getKeys(exampleObject);
console.log(keysArray);

console.log('----------------------------');
// 8. Write a function that takes an object and returns the values as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["John", 30, "New York"]

// array is an object {0: "arrayValue1", 1: "arrayValue2", 2: "arrayValue2"};
// ["arrayValue1", "arrayValue2", "arrayValue2"];
// primitive values are number, string, boolean
// other values (e.g. array, function, object) are objects

function getValues(obj) {
    return Object.values(obj);
}

const exampleObject2 = { name: "John", age: 30, city: "New York" };
const valuesArray = getValues(exampleObject2);
console.log(valuesArray);

console.log('----------------------------');
// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false

function checkKeyExists(obj, key) {
    return obj.hasOwnProperty(key);
}

let person = { name: "John", age: 30, city: "New York" };

console.log(checkKeyExists(person, "age"));
console.log(checkKeyExists(person, "surname"));

console.log('----------------------------');
// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}

function addKeyValuePair(obj, key, value) {
    obj[key] = value;
    return obj;
}

let person2 = { name: "John", age: 30 };
addKeyValuePair(person2, "city", "New York");
console.log(person2);

console.log('----------------------------');
// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}

function removeKeyValuePair(obj, key) {
    delete obj[key];
    return obj;
}

let person3 = { name: "John", age: 30, city: "New York" };
removeKeyValuePair(person3, "city");
console.log(person3);

console.log('----------------------------');
// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}

function createObject(keys, values) {
    let result = {};
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i];
    }
    return result;
}
let keys = ["name", "age", "city"];
let values = ["John", 30, "New York"];

let resultObject = createObject(keys, values);
console.log(resultObject);

// 13. Write a function that takes a nested object and a key, and returns the value of the key if it exists at any level, otherwise null.
// Input: ({a: {b: {c: 5}}}, 'c')
// Output: 5

function findNestedValue(obj, key) {
    for (let prop in obj) {
        if (prop === key) {
            return obj[prop];
        } else if (typeof obj[prop] === 'object') {
            let result = findNestedValue(obj[prop], key);
            if (result !== null) {
                return result;
            }
        }
    }
    return null;
}

let nestedObject = { a: { b: { c: 5 } } };
let key = 'c';

let resultValue = findNestedValue(nestedObject, key);
console.log(resultValue);

// 14. Write a function that takes a nested object and a key, and returns the depth of the key in the object, otherwise -1.
// Input: ({a: {b: {c: 5}}}, 'c')
// Output: 3

function findNestedDepth(obj, key, depth = 1) {
    for (let prop in obj) {
        if (prop === key) {
            return depth;
        } else if (typeof obj[prop] === 'object') {
            let result = findNestedDepth(obj[prop], key, depth + 1);
            if (result !== -1) {
                return result;
            }
        }
    }
    return -1;
}

let nestedObject2 = { a: { b: { c: 5 } } };
let key2 = 'c';

let depth = findNestedDepth(nestedObject, key);
console.log(depth);
