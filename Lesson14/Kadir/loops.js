const prompt=require("prompt-sync")();

// 1. Write a loop that prints out the numbers from 1 to 10.

for (let i=1;i<=10;i++){
    console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7...

for (let i=1;i<=20;i+=2){
    console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...

for (let i=2;i<=20;i+=2){
    console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 4. Write a loop that finds the maximum number in an array of numbers.
const findMaxNumberInArray = [3, 10, 23, 42, 55, 12, 7, 4, 90];

let max = findMaxNumberInArray[0];

for(let i=1; i<=findMaxNumberInArray.length; i++){
  if (max < findMaxNumberInArray[i]){
      max = findMaxNumberInArray[i]; 
  } 
}
console.log(max);

console.log('- - - - - - - - - - - - - - - - - ');
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [10, 1, 23, 42, 55, 12, 7, 4];

let min = findMaxNumberInArray[0];

for(let i=1; i<=findMinNumberInArray.length; i++){
    if (min > findMinNumberInArray[i]){
        min = findMinNumberInArray[i]; 
    } 
  }
  console.log(min);

console.log('- - - - - - - - - - - - - - - - - ');
// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

let reverseString="";

for(let i= string.length - 1; i >= 0; i--){
    reverseString = reverseString + string[i];
    // reverseString += string[i];
}

console.log(reverseString);
console.log('- - - - - - - - - - - - - - - - - ');
// 7. Write a while loop that counts from 10 to 1 and prints out each number.


for(let i=10;i>=1;i--){

console.log(i);
}

// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }


console.log('- - - - - - - - - - - - - - - - - ');
// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.
function generateRandomNumber () {
    return Math.floor(Math.random() * 10) + 1;
  }
  let randomNumber = generateRandomNumber();
  let iterations = 1;
  let iterationsArray = [randomNumber];
  
  while(randomNumber <= 8){
    randomNumber = generateRandomNumber();
    iterationsArray.push(randomNumber);
    iterations++;
  }
  console.log(randomNumber,"iterations: ",iterations, "iterationsArray: ", iterationsArray);
console.log('- - - - - - - - - - - - - - - - - ');
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.
let i=0;

do{
i++
console.log(i);
}while(i<10);

console.log('- - - - - - - - - - - - - - - - - ');

// 10. Write a for...in loop that prints out the keys and values of an object.
let person = {name: "John", surname: "Doe", age: 30, city: "New York"};

let man="";

for(i in person){
    man+=person[i]+" ";
}

console.log(man);

console.log('- - - - - - - - - - - - - - - - - ');
// 11. Write a for...in loop that sums the values of an object.
let obj = {a: 10, b: 20, c: 30};

let sum=0;

for(i in obj){
    sum+=obj[i];
}

console.log(sum);
