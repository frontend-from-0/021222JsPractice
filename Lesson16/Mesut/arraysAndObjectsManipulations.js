// We did not manage to do the exercises in the Lesson 15 so we do them in the lesson 16 instead. This is the reason Lesson15 directory is not present.

// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10

console.log('-----------exercise 2-----------------');
// 2. Write a function that takes an array of integers and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5

console.log('------------exercise 3----------------');
// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World!"
function arrToStr(arr){
    let string="";
    
    for (let i = 0; i < arr.length; i++) {
    string=string+" "+arr[i];
        
    }
console.log(string);
}
arrToStr(["Hello", "World", "!"])
console.log('-----------exercise 4-----------------');
// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10];
// Output: [1, 3, 7]
function oddNumbers(arr){
    let newArr=[];
for(let num in arr){
    if(arr[num]%2==!0){
        newArr.push(arr[num]);
    }
   
}
console.log(newArr);
}
oddNumbers([1, 2, 3, 4, 7, 10]);
console.log('------------exercise 5----------------');
// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10]

function evenNumbers(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            newArr2.push(arr[i]);
        }
    }
    console.log(newArr2);
}
evenNumbers([1, 2, 3, 4, 7, 10]);
console.log('------------exercise 6----------------');
// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2,3,2, 4, 2,122,11,12], 2)
// Output: [1, 3, 4]

function deletedArr(arr,n){
    let newArr4=[];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] !==n){
        newArr4.push(arr[i]);
      }
        
    }
    console.log(newArr4);
}

deletedArr([1, 2, 3, 4,3, 3,11,18,2,2,2,78], 3);

console.log('--------------exercise 7--------------');
// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]
debugger;
function justKeys(obj){
    let keys=[];
    for(let i=0;i<Object.values(obj).length;i++){
        keys.push(Object.values(obj)[i]);

    }
    console.log(keys);
}

justKeys({name: "John", age: 30, city: "New York"});

console.log('------------exercise 8----------------');
console.log('-------------exercise 9---------------');
// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false

// function check(obj,key){
//     for(let i=0;i<Object.values(obj).length;i++){
//         if()
//     }





console.log('--------------exercise 10--------------');
// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}

function addKeyValue(obj,key,value){
    let x ={};
    obj[key]=value;
   return obj;
}
console.log(addKeyValue({name: "John", age: 30}, "city", "New York"));

console.log('-------------exercise 11---------------');
// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}

function deleteKeyValue(obj, key){
    delete obj[key];
    return obj;
    
}

console.log(deleteKeyValue({name: "John", age: 30, city: "New York"}, "city"));

console.log('-------------exercise 12---------------');
// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}
//?????????????????????????????????????????????????????/
function concatenateArrays(arr1, arr2){
    let obj={};
    for(let i=0;i<arr1.length;i++){
        obj[arr1[i]]=arr2[i];   
   
    }
   return obj;
}

console.log(concatenateArrays=(["name", "age", "city"], ["John", 30, "New York"]));

//?????????????????????????????????????????????????????/
console.log('-------------exercise 13---------------');
// 13. Write a function that takes a nested object and a key, and returns the value of the key if it exists at any level, otherwise null.
// Input: ({a: {b: {c: 5}}}, 'c')
// Output: 5

function inception(obj,value){
let x=Object.keys(obj);
if(x[0]==value){
    return value;
}else{
    return inception(Object.values(obj)[0],value);
}
}console.log(inception({a: {b: {c: 5}}}, 'c'));
//i couldn't manage to return null if key does not exist
console.log('-------------exercise 14---------------');
// 14. Write a function that takes a nested object and a key, and returns the depth of the key in the object, otherwise -1.
// Input: ({a: {b: {c: 5}}}, 'c')
// Output: 3
//this is above my range, for now
