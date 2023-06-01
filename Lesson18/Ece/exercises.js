// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console. Then create a Student class that extends the Person class and adds a major property. Override the greet() method in the Student class to log a different greeting message to the console. Create 2 variables, one of type Person and one of type Student and log them to console.
class Person {
  constructor(name, age, gender) {
    this._name = name;
    this._age = age;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  greet() {
    console.log(
      "Hello, my name is  " +
        this._name +
        " . I am a " +
        this._gender +
        " and I am " +
        this._age +
        " years old."
    );
  }
}

const ece = new Person("Ece", 31, "female");
ece.greet();

/* 2. Create a Shape class with name and color properties, and 
a describe() method that logs a description of the shape to the console(e.g. "This is a blue square").
Then create a Square class that extends the Shape class and adds sideLength and area properties.
Override the describe() method in the Square class to log a description of the square to the console
(e.g. "This is a blue square with a side length of 5 and an area of 25").*/

class Shape {
  constructor(name, color) {
    this._name = name;
    this._color = color;
  }
  describe(name, color) {
    console.log("This is a " + this._color + " " + this._name + ".");
  }
}
class Square extends Shape {
  constructor(name, color, sideLength, area) {
    super();
    this._name = name;
    this._color = color;
    this._sideLength = sideLength;
    this._area = area;
  }
  get sideLength() {
    return this._sideLength;
  }
  get area() {
    return this._area;
  }
  get name() {
    return this._name;
  }
  get color() {
    return this._color;
  }

  describe(name, color, sideLength, area) {
    console.log(
      "This is a " +
        this._color +
        " " +
        this._name +
        " with a side length of " +
        this._sideLength +
        " and an area of " +
        this._area +
        " ."
    );
  }
}
const square = new Square("Square", "red", 4, 16);
square.describe();
/* 3. Create a Vehicle class with make, model, and year properties, and 
a start() method that logs a message to the console indicating that the vehicle has started. 
Then create a Car class that extends the Vehicle class and adds a numDoors property. 
Override the start() method in the Car class 
to log a different message to the console indicating that the car has started.*/
class Vehicle {
  constructor(make, model, year) {
    this._make = make;
    this._model = model;
    this._year = year;
  }
  start() {
    console.log("The vehicle has started.");
  }
}
class Car extends Vehicle {
  constructor(numDoors) {
    super();
    this._numDoors = numDoors;
  }
  get numDoors() {
    return this._numDoors;
  }
  start() {
    console.log("The vehicle with " + this._numDoors + " doors has started.");
  }
}
const car = new Car(4);
car.start();
/* 4. Create a BankAccount class with balance and interestRate properties, 
and deposit() and withdraw() methods. 
Add a transactionHistory property that is an array of objects representing each transaction made on the account, 
with properties for type (either "deposit" or "withdrawal"), amount, and date 
({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). 
Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. 
Implement a get transactionHistory() getter method that 
returns a copy of the transaction history array, and a get currentBalance() getter method 
that calculates and returns the current balance of the account based on the transaction history.*/
class BankAccount {
  constructor(balance, intrestRate, amount) {
    this._balance = balance;
    this._intrestate = intrestRate;
    this._transactionHistories = {
      type: "withdrawal",
      amount: amount,
      date: new Date().toLocaleDateString(),
    };
  }
  deposit(amount) {
    this._transactionHistories.push({
      type: "deposit",
      amount: amount,
      date: new Date().toLocaleDateString(),
    });
    this._balance = this._balance + amount;
    console.log(
      "Money deposited to the account is " +
        amount +
        " USD" +
        " and total balance is " +
        this._balance +
        " USD"
    );
  }
  withdraw(withdrawnAmount, amount, transactionHistories) {
    transactionHistories = -amount;
    this._balance = amount - withdrawnAmount;
    console.log(
      "Money withdrawn from the account is " +
        withdrawnAmount +
        " USD" +
        " and total balance is " +
        this._balance +
        " USD"
    );
    return transactionHistories;
  }
  get currentBalance() {
    return this._balance;
  }
  get transactionHistories() {
    return this._transactionHistories;
  }
}
const bankAccount = new BankAccount(100, 0, -50, 50);
console.log(bankAccount.currentBalance);
bankAccount.deposit(20);
console.log(bankAccount.currentBalance);
console.log(bankAccount.transactionHistories);
