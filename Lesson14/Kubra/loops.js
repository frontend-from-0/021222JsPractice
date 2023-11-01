// 1. Write a loop that prints out the numbers from 1 to 10.

for(let i=1; i<=10; i++){
    console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7...

for(let i=1; i<=20; i+=2){
    console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...

for(let i=2; i<=20; i+=2){
    console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 4. Write a loop that finds the maximum number in an array of numbers.
const findMaxNumberInArray = [3, 10, 23, 42, 55, 12, 7, 4, 90];
let maxNumber = findMaxNumberInArray[0];

for (let i = 1; i < findMaxNumberInArray.length; i++) {
  if (findMaxNumberInArray[i] > maxNumber) {
    maxNumber = findMaxNumberInArray[i];
  }
}
console.log('Max number:', maxNumber);

console.log('- - - - - - - - - - - - - - - - - ');
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [10, 1, 23, 42, 55, 12, 7, 4];
let minNumber = findMinNumberInArray[0];

for (let i = 1; i < findMinNumberInArray.length; i++) {
  if (findMinNumberInArray[i] < minNumber) {
    minNumber = findMinNumberInArray[i];
  }
}
console.log('Min number:', minNumber);

console.log('- - - - - - - - - - - - - - - - - ');
// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let reversedString = '';

for (let i = string.length - 1; i >= 0; i--) {
  reversedString += string[i];
}

console.log('Reversed string:', reversedString);

console.log('- - - - - - - - - - - - - - - - - ');
// 7. Write a while loop that counts from 10 to 1 and prints out each number.

let countDown = 10;

while (countDown >= 1) {
  console.log(countDown);
  countDown--;
}

console.log('- - - - - - - - - - - - - - - - - ');
// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.

let iterations = 0;

while (true) {
  let randomNum = Math.floor(Math.random() * 10) + 1;
  iterations++;

  if (randomNum > 8) {
    break;
  }
}

console.log('Total iterations:', iterations);
console.log('- - - - - - - - - - - - - - - - - ');
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.

let doWhileCounter = 1;

do {
  console.log(doWhileCounter);
  doWhileCounter++;
} while (doWhileCounter <= 10);

// 10. Write a for...in loop that prints out the keys and values of an object.
let person = {name: "John", surname: "Doe", age: 30, city: "New York"};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }


// 11. Write a for...in loop that sums the values of an object.
let obj = {a: 10, b: 20, c: 30};
let sum = 0;

for (let key in obj) {
  sum += obj[key];
}
console.log('Sum of values:', sum);