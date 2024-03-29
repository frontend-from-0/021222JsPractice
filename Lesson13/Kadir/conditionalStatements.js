const prompt=require("prompt-sync")(); //for prompt usage in whole page. + node_modules, package-lock.json and package.json additions already installed


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

// for "Prompt" usage in VSCode, please check top of the page

let currentAge = parseInt(prompt("Please enter your age as a digit")); 
// 2 - will work, two will not work 

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

election(currentAge);


// function election2(age) {
//   switch (true) {
//     case age < 18:
//         console.log(age, "Sorry, you are not old enough to vote");
//       break;
//     case (age>=18 && age<=65):
//     console.log(age, "You are eligible to vote");
//       break;
//     default:
//         console.log(age, "You are a senior citizen");
//     break;
//   }
// }
// election2(50);
// election2(66);
// election2(14);

// 3. Write a program that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.

let a=parseInt(prompt("Input 1st number:"));
let b=parseInt(prompt("Input 1st number:"));

function compareTwoNumbers(num1, num2){
  if (num1>num2){
    console.log("1st number (" + num1 + ") is greater than 2nd number(" + num2 + ")");
  } else if (num1<num2){
    console.log("1st number (" + num1 + ") is less than 2nd number(" + num2 + ")");
  } else {
    console.log("1st number (" + num1 + ") is equal to 2nd number(" + num2 + ")");
  }
}

compareTwoNumbers(a,b);


// 4. Write a program that takes in a string and checks if the first letter is uppercase using if else statement.

let funString =prompt("Input a funny string: ");

function lettercase(Lett){
  if (Lett===Lett.toUppercase()){
    console.log("1st letter ("+Lett+") is uppercase.");
  } else {
    console.log("1st letter ("+Lett+") is lowercase.");
  }
}

// function lettercase(Lett){
//   if (string.fromCharcode(Lett[0])>= feff0041 && string.fromCharcode(Lett[0] <= feff005a)){
//     console.log("1st letter ("+Lett[0]+") is uppercase.");
//   } else {
//     console.log("1st letter ("+Lett[0]+") is lowercase.");
//   }
// }

lettercase(funString);


// 5. Write a program that takes in a number and checks if it's positive, negative, or zero using if else statement.

function checkNumber(num){

  if (num==0){
    console.log(num ," is zero");
  } else if (num > 0){
    console.log(num ," is positive.");
  } else
    console.log(num ," is negative.");
  }

  checkNumber(-25);
  checkNumber(0);
  checkNumber(5);


// 6. Write a program that takes in a year and checks if it's a leap year or not using if else statement.

let year=parseInt(prompt("Input year in 'YYYY' number format."));

function leapYear(num){
  if ((0 == num % 4) && (0 != num % 100) || (0 == num % 400)){
    console.log(num +" is a leap year and February takes 29 days");
  } else {
    console.log(num +" is not a leap year. You need to wait for "+4-(num%4)+" years")
  };
};

leapYear(year);

// let year=parseInt(prompt("Input year in 'YYYY' number format."));

// function leapYear(num){
//   if (num%4===0){
//     console.log(num +" is a leap year and February takes 29 days");
//   } else {
//     console.log(num +" is not a leap year. You need to wait for " + (4 - (num%4)) + " years")
//   };
//  };

// leapYear(year);

// 7. Write a program that takes in a temperature and checks if it's above or below freezing using if else statement.

let temp=parseInt(prompt("Input outdoor temperature: "));

function getWeather(num){
  if (num<=0){
    console.log(num +" is freezing, stay home, watch TV!");
  } else {
    console.log(num +" is great, go out, watch the sun and do some sports..");
  }
}

getWeather(temp);

// 8. Write a program that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness. 
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

function indexBMI(height, width){
  let height=parseInt(prompt("Input your height(m)= "));
  let weight=parseInt(prompt("Input your weight(kg)= "));

  const bmi = width/(height^2);

  if (bmi<=18.5){
    console.log("You are underweight. You need to eat much more..");
  } else if (bmi>18.5 && bmi<=24.9){
    console.log(" You have Healthy Weight. So go on what you are doing..");
  } else if (bmi>24.9 && bmi<=29.9){
    console.log(" You are overweight. Get an action soon..");
  } else {
    console.log(" You have obesity. Go to a doctor..");
  }
}

indexBMI(height, weight);


// 9. Write a program that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

let age=parseInt(prompt("Input your age= "));

function checkAgeGroup(num){
  if (num<=12){
    console.log(num +"You are a child.");
  } else if (num<=19){
    console.log(num +"You are a teenager.");
  } else if (num<=64) {
    console.log(num +"You are an adult.");
  } else {
    console.log(num +"You are a senior citizen.");
  }
}

checkAgeGroup(age);

// 10. Write a program that asks the user to enter their age and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

let age2=parseInt(prompt("Input your age: "));
let student=prompt("Are you a student (Y/N): ");

function canVote(age2, isStudent){
  if (age2<18 && isStudent==="Y"){
    console.log("You are a student and not old enough to vote");
  } else if (age2>=18 && age2<66 && isStudent==="N"){
    console.log("You are eligible to vote");
  } else if (age2>65 && isStudent==="N"){
    console.log("You are a senior citizen");
  } else if (age2>=18 && isStudent==="Y"){
    console.log("You are old enough to vote");
  } else {
    console.log("You are not old enough to vote");
  }
}

canVote(age2, student);

// 11. Write a program that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

let salary=parseInt(prompt("What is your current salary ($)? "));
let experience=parseInt(prompt("What is your years of experience? "));

function jobOffer(salary, experience){
  if (salary<=30000 && experience<5){
    console.log("Sorry, we cannot offer you the job at this time");
  } else if (salary<50000 && experience<10 && experience>=5){
    console.log("We can offer you the job at a lower salary");
  } else if (salary>=50000 && experience>=10){
    console.log("We can offer you the job at the requested salary");
  } else {
    console.log("We will contact with you for further opportunities ");
  }
}

jobOffer(salary, experience);

// 12. Write a program that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".

let score=parseInt(prompt("Input your test score: "));

function checkScore(num){
  if (num<=60){
    console.log("Your score: "+num +". You failed the test.");
  } else if (num>60&&num<=70){
    console.log("Your score: "+num +". You passed the test, but your grade is not great.");
  } else if (num>70&&num<=80) {
    console.log("Your score: "+num +". You got a B.");
  } else if (num>80&&num<=90) {
    console.log("Your score: "+num +". You got an A.");
  } else {
    console.log("Your score: "+num +". You got an A+ - Great job!");
  }
}

checkScore(score);

// 13. Write a program that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases.

function findSeasonName(month) {
    switch (month) {
    case 1:
    case 2:
    case 12:
        console.log(month, "Winter");
        break;
//         // return "Winter";
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
  // }
  findSeasonName(5);
  // findSeasonName(1);
  // findSeasonName(10);



// 14. Write a program that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.

let yourGrade=prompt("Input your grade (A,B,C,D or F?): ");

function grade(letter) {
    switch (letter) {
      case "A":
      case "B":
      case "C":
          console.log("Grade: "+letter+ " 'Passed'.");
          break;

      default:
          console.log("Grade: "+letter+ " 'Failed'.");
          break;
    }
  }

grade(yourGrade);

// 15. Write a program that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.

function getUserAge() {  
  let userInput;  
  do {  
    userInput = prompt("Please enter your age to calculate dog-year equivalent: ");  
    console.log('number:', parseInt(userInput) < 0);  
// only move further if input can be converted to a positive number 
  } while (!parseInt(userInput) || parseInt(userInput) < 0);  
  convertToDogYears(userInput);  
};  

function convertToDogYears(userInput) {  
  const age = parseInt(userInput);  

  const dogAge = age * 7;  
  console.log("Your dog-year equivalent: " + dogAge);  
};  

getUserAge();