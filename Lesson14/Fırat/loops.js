// 1. Write a loop that prints out the numbers from 1 to 10.
for (i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("- - - - - - - - - - - - - - - - - ");
// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7....
for (i = 1; i <= 20; i += 2) {
  console.log(i);
}

console.log("- - - - - - - - - - - - - - - - - ");
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...
for (i = 2; i <= 20; i += 2) {
  console.log(i);
}

console.log("- - - - - - - - - - - - - - - - - ");
// 4. Write a loop that finds the maximum number in an array of numbers.
const findMaxNumberInArray = [3, 10, 23, 42, 55, 12, 7, 4, 90];
let maxnumber = findMaxNumberInArray[0];

for (let i = 1; i < findMaxNumberInArray.length; i++) {
  if (findMaxNumberInArray[i] > maxnumber) {
    maxnumber = findMaxNumberInArray[i];
  }
}
console.log(maxnumber);

console.log("- - - - - - - - - - - - - - - - - ");
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [10, 1, 23, 42, 55, 12, 7, 4];
let minNumber = findMinNumberInArray[0];

for (let i = 1; i < findMinNumberInArray.length; i++) {
  if (findMinNumberInArray[i] < minNumber) {
    minNumber = findMinNumberInArray[i];
  }
}
console.log(minNumber);

console.log("- - - - - - - - - - - - - - - - - ");
// 6. Write a loop that reverses a given string.
const string = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString(string));

console.log("- - - - - - - - - - - - - - - - - ");
// 7. Write a while loop that counts from 10 to 1 and prints out each number.
for (i = 10; i >= 1; i--) {
  console.log(i);
}
/*Aşağıda while dögüsüyle de yaptım */
let sayi = 10;

while (sayi >= 1) {
  console.log(sayi);
  sayi--;
}

console.log("- - - - - - - - - - - - - - - - - ");
// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.
let random = 0;

while (true) {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  count++;
  console.log(randomNum);
  if (randomNum > 8) {
    break;
  }
}

console.log("- - - - - - - - - - - - - - - - - ");
// 9. Write ;a do-while loop that counts from 1 to 10 and prints out each number.
let number = 1;
do {
  console.log(number);
  number++;
} while (number <= 10);
console.log("- - - - - - - - - - - - - - - - - ");
// 10. Write a for...in loop that prints out the keys and values of an object.
let person = { name: "John", surname: "Doe", age: 30, city: "New York" };

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ": " + person[key]);
  }
}

// 11. Write a for...in loop that sums the values of an object.
let obj = { a: 10, b: 20, c: 30 };
let sum = 0;

for (let key in obj) {
  sum += obj[key];
}
console.log("Sum:", sum);
