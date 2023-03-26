// 1. Write a program that takes in a number and checks if it's even or odd using if else statement.
// // function checkNumber(number) {
// //   if (typeof number === 'number') {
// //     isEven();
// //   } else if (parseInt(number)) {
// //     isEven();
// //   } else {
// //     console.log('Error: input is not a number!');
// //   }

// //   function isEven() {
// //     if (number % 2 === 0) {
// //       console.log(number, 'is Even');
// //     } else {
// //       console.log(number, 'is Odd');
// //     }
// //   }

// // }

// function checkNumber(number) {
//   if (number % 2 === 0) {
//     console.log(number, 'is Even');
//   } else {
//     console.log(number, 'is Odd');
//   }
// }

// checkNumber(2);
// checkNumber(5);
// checkNumber(8);
// checkNumber(10);

// // 2. Write a program that asks the user to enter their age. If the age is less than 18, print "Sorry, you are not old enough to vote". If the age is between 18 and 65 (inclusive), print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen".

// // Prompt does not work in VSCode
// // let currentAge = parseInt(prompt("Please enter your age as a digit")); // 2 - will work, two will not work 

// function election(age){

//     if (age<18){
//         console.log(age, "Sorry, you are not old enough to vote");
//     }

//     else if(age>=18 && age<=65){
//         console.log(age, "You are eligible to vote");
//     }

//     else {
//         console.log(age, "You are a senior citizen");
//     }
// }

// election(17);


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

// // 3. Write a program that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.

// let sayi1 = Number(prompt("lütfen ilk sayıyı giriniz"))
// let sayi2 = Number(prompt("lütfen ikinci sayıyı giriniz"))



//   if (sayi2 < sayi1) {
//     console.log("ilk sayı ikincisinden küçüktür")

//   } else if(sayi2 > sayi1){
//     console.log("ikinci sayı ilk sayıdan küçüktür")

//   }

//   else{
//     console.log("iki sayı birbirine eşittir")
//   }








// 4. Write a program that takes in a string and checks if the first letter is uppercase using if else statement.


// let string = prompt("kelimeyi giriniz");

// let bigString = string.toUpperCase();

// if (string[0]===bigString[0]) {
//   console.log("ilk harf büyük")

// } else {
//   console.log("ilk harf küçük")

// }



// 5. Write a program that takes in a number and checks if it's positive, negative, or zero using if else statement.

// let checkNumber = Number(prompt("Please enter a number:"))


//   if (checkNumber > 0) {
//     console.log("The number is positive")

//   }

//   else if (checkNumber < 0) {
//     console.log("The number is negative")

//   }

//   else{
//     console.log("the number is zero")
//   }




/******************************************************************************************/
// 6. Write a program that takes in a year and checks if it's a leap year or not using if else statement.

// let year = Number(prompt("enter the year:"))

// if (year % 4 != 0) {
//   console.log(year + " is not a leap year")
// } 
//   else{
//     if (year%100 = 0){
//       console.log(year + " is not leap year")

//       else{
//         if(year%400 != 0){
//           console.log(year + " is not leap year")
//         }
//         else{
//           console.log(year + " is leap year")
//         }

//       }
//     }
//   }



// 7. Write a program that takes in a temperature and checks if it's above or below freezing using if else statement.

// let temperature = Number(prompt("please enter the temperature degree in celsius "))

// if( temperature< 0){
//   console.log("you are freezing, temperature is below zero")

// }

// else{
//   console.log("temperature is above zero")
// }

// 8. Write a program that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.




// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity


// let weight = Number(prompt("Please submit your weight in kilogram(like: 70)"))
// let height = Number(prompt("Please submit your height in meter( like: 1.75 )"))

// let BMI = weight/height**2

// if(BMI <= 0 ){
//   console.log("are you alive??")
// }
// else if(BMI < 18.5 && BMI>0 ){
//   console.log("your BMI is: ", BMI, " you are underweight" )
// }

// else if(BMI >= 18.5 && 24.9 > BMI){
//   console.log("your BMI is: ", BMI, " you are in normal range" )
// }

// else if(BMI >= 24.9 && 29.9 > BMI ){
//   console.log("your BMI is: ", BMI, " you are overweight" )
// }


// else {
//   console.log("your BMI is: ", BMI, " you are obese" )
// }


// 9. Write a program that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.


// let personsAge = Number(prompt("please submit your age:"))

// if (personsAge < 0) {
//   console.log("you do not even born")
// }
// else if (personsAge >=0 && personsAge <= 12 ) {
// console.log("you are a child")
// } else if(personsAge >12 && personsAge <= 19){
//   console.log("you are a teenager")

// }

// else if(personsAge >9 && personsAge <= 64){
//   console.log("you are an adult")
// }
// else {
//   console.log("you are senior citizen")
// }


// 10. Write a program that asks the user to enter their age and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

// let userAge = Number(prompt("how old are you?"));
// let education = prompt("Are you a student?\n1- If you a student press 1\n2-If you are NOT student press 2")

// if (userAge<18 &&  education==1){
//   console.log( "You are a student and not old enough to vote")

// }
// else if (userAge<=65 && userAge>= 18 && education==2){
//   console.log("You are eligible to vote")
// }
// else if (userAge>65){
//   console.log("You are a senior citizen")
// }

// else if(education==1 && userAge>=18 ){
//     console.log("You are old enough to vote")
//   }


// 11. Write a program that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".


// let salary = Number(prompt("Enter your salary"))
// let experience = Number(prompt("Enter your years of experience"))

// if(salary<30000 && salary >0 && experience<5 && experience > 0){
//  console.log("Sorry, we cannot offer you the job at this time")
// }

// else if(salary<50000 && experience>=5 && experience <=10){
//   console.log("We can offer you the job at a lower salary")

// }

// else if(salary>=50000 || experience>10){
//   console.log("We can offer you the job at the requested salary")
// }

// else if(salary <=0 || experience <= 0){
//   console.log("please check your answers ")
// }



// 12. Write a program that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".

// let testScore = Number(prompt("Enter your test score: "))

// if (testScore < 60 && testScore >= 0) {
//   console.log("You failed the test")
// }
// else if (testScore <= 70 && testScore >= 60) {
//   console.log("You passed the test, but your grade is not great")
// }


// else if (testScore > 70 && testScore <= 80) {
//   console.log("You got a B")
// }

// else if (testScore <= 90 && testScore > 80) {
//   console.log("You got an A")
// }

// else if (testScore > 90) {
//   console.log("You got an A+ - Great job!")
// }





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

  if (month == 1 || month == 2 || month == 12) {
    console.log(month, "Winter");
  } else if (month == 1 || month == 2 || month == 12) {
    console.log(month, "Spring");
  } else if (month == 1 || month == 2 || month == 12) {
    console.log(month, "Summer");
  } else {
    console.log(month, "Fall");
  }
}
findSeasonName(5);
findSeasonName(1);
findSeasonName(10);



// 14. Write a program that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.

let gradeLetter = prompt("please enter your grade letter")

let bigGradeletter = gradeLetter.toUpperCase()

switch (bigGradeletter) {
  case A:
  case B:
  case C:

    break;

  default:
    break;
}








// 15. Write a program that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.


let humanYear = Number(prompt("please enter your age:"));
let dogYear = 7*humanYear;

if (humanYear>=0) {
  console.log(dogYear)
  
} else {
  console.log("error, time travel have not invented yet")
}
