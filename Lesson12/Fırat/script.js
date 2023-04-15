// Declare a variable x and initialize it to 5.
// Declare a variable y and initialize it to 3.
// Declare a variable z and initialize it to the sum of x and y.
const x = 5;
const y = 3;
const z = x + y;
console.log(z);
// ---
// Declare a variable name and initialize it to your name as a string.
// Declare a variable age and initialize it to your age as a number.
// Declare a variable phrase and initialize it to the string "Hello, world!".
// Add name and age to the sentence above. "Hello, world! My name is (name). I'm (age) years old.".
const name = "ece";
const age = "31";
const phrase = "Hello,world!";
console.log(phrase + " My name is " + name + ". I'm " + age + " years old.");
console.log(`${phrase} My name is ${name}. I'm ${age} years old.`);
// ---
// Declare a variable num1 and initialize it to 10.
// Declare a variable num2 and initialize it to 3.
// Declare a variable result and initialize it to the quotient of num1 divided by num2.
// Declare a variable num3 and initialize it to the difference between num1 and num2.
const num1 = 10;
const num2 = 3;
const result = num1 / num2;
const num3 = num1 - num2;
console.log("num1: ", num1);
console.log("num2: ", num2);

console.log("result: ", result, "num3: ", num3);
// console.table({result: result, num3: num3});
// ---
// Declare a variable firstName and initialize it to your first name as a string.
// Declare a variable lastName and initialize it to your last name as a string.
// Declare a variable fullName and initialize it to the concatenation of firstName and lastName.
const firstName = "Firat";
// 'string' "another string"
const lastName = "Somek";
const fullName = firstName + " " + lastName;
console.log("fullName: ", fullName);
console.log("benimAdım: ", fullName);
console.log("exercise 4 result: ", fullName);

// ---
// Declare a variable num4 and initialize it to 7.
// Declare a variable num5 and initialize it to 2.
// Declare a variable result2 and initialize it to the product of num4 and num5 (multiply numbers).
const num4 = 7;
const num5 = 2;
const result2 = num4 * num5;
console.log("result2: ", result2);

// ---
// Declare a variable PI and initialize it to the value of 3.14159.
// Declare a variable counter and initialize it to 0.
// Increment the counter variable by 1 using the ++ operator.
const PI = 3.14159; //Math.PI;
console.log("PI ", PI);

const PIv2 = Math.PI;
console.log("PIv2 ", PIv2);

let counter = 0;
console.log("1 ", counter);
counter += 1;
console.log("2 ", counter);
counter++; // This only adds 1 to the inital varible
console.log("3 ", counter);
counter = counter + 3;
console.log("4 ", counter);
// ---
// Declare a let variable temperature and initialize it to 20.
// Increase the value of temperature by 5 using the += operator.
let temperature = 20;
temperature += 5;
console.log(temperature);
// ---
// Declare a variable TODAY_DATE and initialize it to the current date using the Date object.
const TODAY_DATE = new Date();
console.log(TODAY_DATE);
console.log(TODAY_DATE.getDate());
console.log(TODAY_DATE.getDay); // number of the day in the week
function getMyDate() {
  return "This is the current date";
}
console.log(getMyDate()); // number of the day in the week
console.log(TODAY_DATE.getMonth() + 1);
// jan 0, feb 1, mar 2 ....

const dayInThePast = "January 1, 2000";
console.log(dayInThePast.split(" ")[1]);

// When you create a new Date object using a string representation of a date and time, such as 'January 1, 2000', the resulting date and time are interpreted based on the timezone of the environment in which the code is running.

// In this case, the output you're seeing (1999-12-31T23:00:00.000Z) is in UTC (Coordinated Universal Time) format, which is often used as a reference time in computing. The Z at the end of the string indicates that the time is in UTC.

// The reason the output is one hour behind what you might expect (i.e. January 1, 2000 at 00:00:00) is because of the timezone offset between your local timezone and UTC. The output indicates that your local timezone is one hour ahead of UTC. This is likely because your local timezone observes daylight saving time, which can cause the timezone offset to change depending on the time of year.

// To get the date and time in your local timezone, you can use methods such as getDate(), getMonth(), and getFullYear() to extract the individual components of the date and time, and then construct a new Date object using those components.
var dayInThePastDate = new Date(dayInThePast);
console.log(dayInThePastDate);

// ---
// Declare a variable x and initialize it to 5. Use the prefix ++ operator to increment the value of x by 1, then log the new value to the console.
// ---
// Declare a variable y and initialize it to 10. Use the postfix ++ operator to increment the value of y by 1, then log the original value of y to the console.
// ---
// (Declare a variable count and initialize it to 0. Use a loop to increment the value of count by 1 using the prefix ++ operator 10 times. Log the final value of count to the console.)
// ---
// Declare a variable num and initialize it to -3. Use the postfix ++ operator to increment the value of num by 1, then multiply the result by 2 and log it to the console.
// ---
// Declare two variables a and b and initialize them to 2 and 3, respectively. Use the prefix ++ operator to increment the value of a by 1, then add b to the result and log it to the console.

//BONUS: generate random number in a range from 0 to 10
//Math.random()
//Math.floor
const randNum = Math.floor(Math.random() * 100) + 50;
console.log(randNum);

function random0to100() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateRandomNumber(min, max) {
  const random = random0to100();
  if (random < min) {
    return generateRandomNumber(50, 100);
  } else {
    return random;
  }
}

console.log(generateRandomNumber(50, 100));

const min = 50;
const max = 100;

// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
// Math.random()*51 multiplies the random number by 51, giving a number between 0 (inclusive) and 51 (exclusive).
// Math.floor(Math.random()*51) rounds down the result of step 2 to the nearest integer, giving a number between 0 (inclusive) and 50 (inclusive).
// Math.floor(Math.random()*51) + 50 adds 50 to the result of step 3, giving a number between 50 (inclusive) and 100 (exclusive).
// So the code generates a random integer between 50 (inclusive) and 100 (exclusive).
const anotherRandom = Math.floor(Math.random() * 51) + min;
console.log("anotherRandom: ", anotherRandom);
