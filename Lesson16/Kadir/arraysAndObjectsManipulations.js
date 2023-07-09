// We did not manage to do the exercises in the Lesson 15 so we do them in the lesson 16 instead. This is the reason Lesson15 directory is not present.

// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10

const integers=[1, 2, 3, 4];
function intArrSum(arrInt){
    let sum=0;
    for(let i=0;i<=arrInt.length-1;i++){
        sum+=arrInt[i];
    }
    return sum;
}

console.log(intArrSum(integers), " is the sum of array.");

console.log('----------------------------');
// 2. Write a function that takes an array of integers and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5

function intArrAve(arrInt){
    let sum=0;
    for(let i=0;i<=arrInt.length-1;i++){
        sum+=arrInt[i];
    }
    return sum/arrInt.length;
}

console.log(intArrAve(integers), " is the average of array.");


console.log('----------------------------');
// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World!"

arrWords= ["Hello", "World", "!"];

function concatArr(arrEx3){
    let sentence="";
    for(let i=0;i<=arrEx3.length-1;i++){
        sentence+=arrEx3[i]+" ";
    }
    return sentence;
}

console.log(concatArr(arrWords));


console.log('----------------------------');
// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10];
// Output: [1, 3, 7]

const intAll=[1, 2, 3, 4, 7, 10];
function intArrOdd(arrInt){
    let oddArr=[];
    for(let i=0;i<=arrInt.length-1;i++){
        if(arrInt[i]%2!==0){
        oddArr=push(arrInt[i]);
    }
    }
    return oddArr;
}

console.log(intArrOdd(intAll));


console.log('----------------------------');
// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10]

const intAll2=[1, 2, 3, 4, 7, 10];
function intArrEven(arrInt){
    let evenArr=[];
    for(let i=0;i<=arrInt.length-1;i++){
        if(arrInt[i]%2===0){
        evenArr=push(arrInt[i]);
    }
    }
    return evenArr;
}

console.log(intArrEven(intAll2));

console.log('----------------------------');
// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2, 3, 4, 2], 2)
// Output: [1, 3, 4]


function removeOccurrences(arr, value) {
    
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== value) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }
  
  const inputArray = [1, 2, 3, 4, 2];
  const valueToRemove = 2;

  console.log(removeOccurrences(inputArray, valueToRemove));

console.log('----------------------------');
// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]

function getKeys(obj) {
    return Object.keys(obj);
  }
  
  const inputObject1 = { name: "John", age: 30, city: "New York" };
  console.log(getKeys(inputObject1));

console.log('----------------------------');
// 8. Write a function that takes an object and returns the values as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["John", 30, "New York"]

function getValues(obj) {
    return Object.values(obj);
  }
  
  const inputObject2 = { name: "John", age: 30, city: "New York" };
  console.log(getValues(inputObject2));


// array is an object {0: "arrayValue1", 1: "arrayValue2", 2: "arrayValue2"};
// ["arrayValue1", "arrayValue2", "arrayValue2"];
// primitive values are number, string, boolean
// other values (e.g. array, function, object) are objects

console.log('----------------------------');
// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false

function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
  }

  const inputObject3 = { name: "John", age: 30, city: "New York" };

  console.log(hasKey(inputObject3, "age")); // true
  console.log(hasKey(inputObject3, "surname")); // false

console.log('----------------------------');
// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}

function addKeyValuePair(obj, key, value) {
    obj[key] = value;
    return obj;
  }
  
  const inputObject4 = { name: "John", age: 30 };
 
  console.log(addKeyValuePair(inputObject4, "city", "New York"));

console.log('----------------------------');
// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}

function removeKeyValuePair(obj, key) {
    delete obj[key];
    return obj;
  }
  
  const inputObject5 = { name: "John", age: 30, city: "New York" };

  console.log(removeKeyValuePair(inputObject5, "city"));
  
console.log('----------------------------');
// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}

function arraysToObject(keys, values) {
    const result = {};
    
    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = values[i];
    }
    
    return result;
  }
  
  // Example usage
  const keysArray = ["name", "age", "city"];
  const valuesArray = ["John", 30, "New York"];
  const outputObject = arraysToObject(keysArray, valuesArray);
  console.log(outputObject);
  

// 13. Write a function that takes a nested object and a key, and returns the value of the key if it exists at any level, otherwise null.
// Input: ({a: {b: {c: 5}}}, 'c')
// Output: 5

function getValueFromNestedObject(obj, key) {
    if (obj.hasOwnProperty(key)) {
      return obj[key];
    }
  
    for (let prop in obj) {
      if (typeof obj[prop] === "object" && obj[prop] !== null) {
        const nestedValue = getValueFromNestedObject(obj[prop], key);
        if (nestedValue !== null) {
          return nestedValue;
        }
      }
    }
    return null;
  }
  
  const inputObject = { a: { b: { c: 5 } } };
  const outputValue = getValueFromNestedObject(inputObject, 'c');
  console.log(outputValue);
  
// 14. Write a function that takes a nested object and a key, and returns the depth of the key in the object, otherwise -1.
// Input: ({a: {b: {c: 5}}}, 'c')
// Output: 3

function getKeyDepth(obj, key, depth = 1) {
    if (obj.hasOwnProperty(key)) {
      return depth;
    }
    for (let prop in obj) {
      if (typeof obj[prop] === "object" && obj[prop] !== null) {
        const nestedDepth = getKeyDepth(obj[prop], key, depth + 1);
        if (nestedDepth !== -1) {
          return nestedDepth;
        }
      }
    }
    return -1;
  }
  
  const inputObject = { a: { b: { c: 5 } } };
  const outputDepth = getKeyDepth(inputObject, 'c');
  console.log(outputDepth);
  
