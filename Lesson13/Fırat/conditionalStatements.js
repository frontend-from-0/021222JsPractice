// 1. Write a program that takes in a number and checks if it's even or odd using if else statement.

function checkNumber(number) {
  if (number % 2 === 0) {
    console.log(number, "is Even");
  } else {
    console.log(number, "is Odd");
  }
}

checkNumber(2);
checkNumber(5);
checkNumber(8);
checkNumber(10);
// 2. Write a program that asks the user to enter their age. If the age is less than 18, print "Sorry, you are not old enough to vote". If the age is between 18 and 65 (inclusive), print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen".
function userAge(age) {
  if (age < 18) {
    console.log("Sorry, you are not old enough to vote");
  } else if (age >= 18 && 65 >= age) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are a senior citizen");
  }
}

userAge(21);
userAge(15);
userAge(68);
// 3. Write a program that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.
function compareNumbers(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
  } else if (num1 < num2) {
    console.log(num1 + " is less than " + num2);
  } else {
    console.log(num1 + " is equeal " + num2);
  }
}
compareNumbers(3, 6);

// 4. Write a program that takes in a string and checks if the first letter is uppercase using if else statement.

function checkFirstLetter(str) {
  if (str[0] === str[0].toUpperCase()) {
    console.log("The first letter is uppercase");
  } else {
    console.log("The first letter is not uppercase");
  }
}
checkFirstLetter("Merhaba");
checkFirstLetter("merhaba");

// 5. Write a program that takes in a number and checks if it's positive, negative, or zero using if else statement.
function checkNumber1(number1) {
  if (number1 > 0) {
    console.log("it's positive");
  } else if (number1 < 0) {
    console.log("it's negative");
  } else {
    console.log("it's zero");
  }
}
checkNumber1(3);
checkNumber1(0);
checkNumber1(-3);

// 6. Write a program that takes in a year and checks if it's a leap year or not using if else statement.
function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log("it's a leap year");
  } else {
    console.log("it is not a leap year");
  }
}
isLeapYear(2020);
isLeapYear(2022);
// 7. Write a program that takes in a temperature and checks if it's above or below freezing using if else statement.
function isCheckFreezing(temperature) {
  if (temperature <= 0) {
    console.log("it's below freezing");
  } else {
    console.log("it's above freezing");
  }
}
isCheckFreezing(-5);
isCheckFreezing(0);
isCheckFreezing(5);

// 8. Write a program that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

function calculateBMI(weight, height) {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Healthy Weight");
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    console.log("Overweight");
  } else {
    console.log("Obesity");
  }
}
calculateBMI(50, 1.8);
calculateBMI(70, 1.8);
calculateBMI(90, 1.8);
calculateBMI(150, 1.8);

// 9. Write a program that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

function personAge(age) {
  if (age >= 0 && age <= 12) {
    console.log("Child");
  } else if (age >= 13 && age <= 19) {
    console.log("Teenager");
  } else if (age >= 20 && age <= 64) {
    console.log("Adult");
  } else {
    console.log("Senior citizen");
  }
}

personAge(8);
personAge(15);
personAge(20);
personAge(68);

// 10. Write a program that asks the user to enter their age and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".
function checkVotingEligibility() {
  var age = prompt("Enter your age");
  var isStudent =
    prompt("Are you a student? (yes or no)").toLowerCase() === "yes";

  if (age < 18 && isStudent) {
    console.log("You are a student and not old enough to vote");
  } else if (age >= 18 && age <= 65 && !isStudent) {
    console.log("You are eligible to vote");
  } else if (age > 65) {
    console.log("You are a senior citizen");
  } else if (age >= 18 && isStudent) {
    console.log("You are old enough to vote");
  } else {
    console.log("invalid input");
  }
}
/*Kodu vscode üzerinden çalışmadığı için browser üzerinden denedim sorunsuz çalışıyor*/
checkVotingEligibility();

// 11. Write a program that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

function checkJobEligibility() {
  var salary = prompt("Enter your salary");
  var experience = prompt("Enter your years of experience");

  if (salary < 30000 && experience < 5) {
    console.log("Sorry, we cannot offer you the job at this time");
  } else if (salary < 50000 && experience >= 5 && experience <= 10) {
    console.log("We can offer you the job at a lower salary");
  } else if (salary > 50000 && experience > 10) {
    console.log("We can offer you the job at the requested salary");
  } else {
    console.log("invalid input");
  }
}
checkJobEligibility();

// 12. Write a program that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".

function checkScore(score) {
  if (score < 60) {
    console.log("You failed the test");
  } else if (score >= 60 && score <= 70) {
    console.log("You passed the test, but your grade is not great");
  } else if (score > 70 && score <= 80) {
    console.log("You got a B");
  } else if (score > 80 && score <= 90) {
    console.log("You got an A");
  } else {
    console.log("You got an A+ - Great job!");
  }
}
checkScore(99);
// 13. Write a program that asks éthe user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases.
function findSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log(month, "winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log(month, "spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log(month, "summer");
      break;
    default:
      console.log(month, "fall");
      break;
  }
}
findSeason(10);

// 14. Write a program that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.
function checkGrade(grade) {
  switch (grade) {
    case "A":
    case "B":
    case "C":
      console.log(grade, "passing");
      break;
    default:
      console.log(grade, "failing");
      break;
  }
}
checkGrade("A");
checkGrade("E");

// 15. Write a program that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.

function calculateDogYears() {
  let age = prompt("Enter your age");
  let dogYears = age * 7;
  if (age <= 0) {
    console.error("Invalid age!");
  } else {
    console.log("Your age in dog years is: " + dogYears);
  }
}
calculateDogYears();
