// 1. Write a program that takes in a number and checks if it's even or odd using if else statement.
// function checkNumber(number) {
//   if (typeof number === 'number') {
//     isEven();
//   } else if (parseInt(number)) {
//     isEven();
//   } else {
//     console.log('Error: input is not a number!');
//   }

//   function isEven() {
//     if (number % 2 === 0) {
//       console.log(number, 'is Even');
//     } else {
//       console.log(number, 'is Odd');
//     }
//   }
  
// }

function checkNumber(number) {
  if (number % 2 === 0) {
    console.log(number, 'is Even');
  } else {
    console.log(number, 'is Odd');
  }
}

checkNumber(2);
checkNumber(5);
checkNumber(8);
checkNumber(10);

// 2. Write a program that asks the user to enter their age. If the age is less than 18, print "Sorry, you are not old enough to vote". If the age is between 18 and 65 (inclusive), print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen".

// Propmt does not work in VSCode
// let currentAge = parseInt(prompt("Please enter your age as a digit")); // 2 - will work, two will not work 

function election(age){

    if (age<18){
        console.log(age, "Sorry, you are not old enough to vote");
    }

    else if(age>=18 && age<=65){
        console.log(age, "You are eligible to vote");
    }

    else {
        console.log(age, "You are a senior citizen");
    }
}

election(17);


function election2(age) {
  switch (true) {
    case age < 18:
        console.log(age, "Sorry, you are not old enough to vote");
      break;
    case (age>=18 && age<=65):
    console.log(age, "You are eligible to vote");
      break;
    default:
        console.log(age, "You are a senior citizen");
    break;
  }
}
election2(50);
election2(66);
election2(14);

// 3. Write a program that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.

// 4. Write a program that takes in a string and checks if the first letter is uppercase using if else statement.

// 5. Write a program that takes in a number and checks if it's positive, negative, or zero using if else statement.

// 6. Write a program that takes in a year and checks if it's a leap year or not using if else statement.

// 7. Write a program that takes in a temperature and checks if it's above or below freezing using if else statement.

// 8. Write a program that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness. 
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

// 9. Write a program that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

// 10. Write a program that asks the user to enter their age and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

// 11. Write a program that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

// 12. Write a program that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".


// 13. Write a program that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases.

function findSeasonName(month) {
    switch (month) {
    case 1:
    case 2:
    case 12:
        console.log(month, "Winter");
        break;
        // return "Winter";
    case 3:
    case 4:
    case 5:
        console.log(month, "Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log(month, "Summer");
        break;

    default:
          console.log(month, "Fall");
      break;
    }

    // if (month == 1 || month == 2 || month == 12) {
    //   console.log(month, "Winter");
    // } else if (month == 1 || month == 2 || month == 12) {
    //   console.log(month, "Spring");
    // } else if (month == 1 || month == 2 || month == 12) {
    //   console.log(month, "Summer");
    // } else {
    //   console.log(month, "Fall");
    // }
  }
  findSeasonName(5);
  findSeasonName(1);
  findSeasonName(10);



// 14. Write a program that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.

// 15. Write a program that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.