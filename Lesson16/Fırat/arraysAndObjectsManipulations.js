// We did not manage to do the exercises in the Lesson 15 so we do them in the lesson 16 instead. This is the reason Lesson15 directory is not present.

// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10

function calculateSum(arrayOfIntegers) {
  let sum = 0;
  for (let i = 0; i < arrayOfIntegers.length; i++) {
    sum += arrayOfIntegers[i];
  }
  return sum;
}

console.log(calculateSum([1, 2, 3, 4]));

console.log("----------------------------");
// 2. Write a function that takes an array of integers and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5

function calculateAverage(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i] / array.length;
  }
  return average;
}

console.log(calculateAverage([1, 2, 3, 4]));

console.log("----------------------------");
// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World!"

function concatenateArray(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i !== arr.length - 1) {
      result += " ";
    }
  }
  return result;
}

console.log(concatenateArray(["Hello", "World", "!"]));

console.log("----------------------------");
// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10];
// Output: [1, 3, 7]

function getOddNumbers(array1) {
  let oddNumbers = [];
  for (let i = 0; i < array1.length; i++) {
    let num1 = array1[i];
    if (num1 % 2 !== 0) {
      oddNumbers.push(num1);
    }
  }
  return oddNumbers;
}

console.log(getOddNumbers([1, 2, 3, 4, 7, 10]));

console.log("----------------------------");
// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10]

function getEvenNumbers(array2) {
  let evenNumbers = [];
  for (let i = 0; i < array2.length; i++) {
    let num2 = array2[i];
    if (num2 % 2 == 0) {
      evenNumbers.push(num2);
    }
  }
  return evenNumbers;
}

console.log(getEvenNumbers([1, 2, 3, 4, 7, 10]));

console.log("----------------------------");
// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2, 3, 4, 2], 2)
// Output: [1, 3, 4]

function removeValue(array3, value) {
  let newArray = [];
  for (let i = 0; i < array3.length; i++) {
    if (array3[i] !== value) {
      newArray.push(array3[i]);
    }
  }
  return newArray;
}

console.log(removeValue([1, 2, 3, 4, 2], 2));

console.log("----------------------------");
// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]

function getOnlyKeys(obj) {
  return Object.keys(obj);
}
console.log(getOnlyKeys({ name: "John", age: 30, city: "New York" }));

console.log("----------------------------");
// 8. Write a function that takes an object and returns the values as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["John", 30, "New York"]

function getOnlyValues(obj) {
  return Object.values(obj);
}
console.log(getOnlyValues({ name: "John", age: 30, city: "New York" }));

// array is an object {0: "arrayValue1", 1: "arrayValue2", 2: "arrayValue2"};
// ["arrayValue1", "arrayValue2", "arrayValue2"];
// primitive values are number, string, boolean
// other values (e.g. array, function, object) are objects

console.log("----------------------------");
// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false

const obj = { name: "John", age: 30, city: "New York" };

function checkKey(obj, key) {
  return obj.hasOwnProperty(key);
}

console.log(checkKey(obj, "age"));
console.log(checkKey(obj, "surname"));

console.log("----------------------------");
// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}

function addProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}

const obj = { name: "John", age: 30 };
addProperty(obj, "city", "New York");
console.log(obj);

console.log("----------------------------");
// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}

function removeKey(obj, key) {
  delete obj[key];
  return obj;
}

const obj = { name: "John", age: 30, city: "New York" };
removeKey(obj, "city");
console.log(obj);

console.log("----------------------------");
// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}

function createNewArray(keys, values) {
  let newArray = {};
  for (let i = 0; i < keys.length; i++) {
    newArray[keys[i]] = values[i];
  }
  return newArray;
}

const keys = ["name", "age", "city"];
const values = ["John", 30, "New York"];

const newArray = createNewArray(keys, values);
console.log(newArray);
// 13. Write a function that takes a nested object and a key, and returns the value of the key if it exists at any level, otherwise null.
// Input: ({a: {b: {c: 5}}}, 'c')
// Output: 5

function findValue(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  }

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] === "object") {
      const value = findValue(obj[prop], key);
      if (value !== null) {
        return value;
      }
    }
  }
  return null;
}

console.log(findValue({ a: { b: { c: 5 } } }, "c"));

// 14. Write a function that takes a nested object and a key, and returns the depth of the key in the object, otherwise -1.
// Input: ({a: {b: {c: 5}}}, 'c')
// Output: 3

function findDepth(obj, key, depth = 1) {
  if (obj.hasOwnProperty(key)) {
    return depth;
  }
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] === "object") {
      const result = findDepth(obj[prop], key, depth + 1);
      if (result !== -1) {
        return result;
      }
    }
  }
  return -1;
}
console.log(findDepth({ a: { b: { c: 5 } } }, "c"));
