
console.log('- - - - - -exercise 1 - - - - - - - - - - - ');
// 1. Write a loop that prints out the numbers from 1 to 10.

for(let i=1; i<11; i++){
    console.log(i);
}

console.log('- - - - - - - -exercise 2 - - - - - - - - - ');
// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7...
for(let i=1; i<21; i+=2){
    console.log(i);
}

console.log('- - - - - - - -exercise 3 - - - - - - - - - ');
// // 3. Write a loop that prints out the even numbers from 1 to 20.
// // 2, 4, 6...

for (let i= 2; i<21; i +=2 ){
    console.log(i);
}

console.log('- - - - - - -exercise 4 - - - - - - - - - - ');
// // 4. Write a loop that finds the maximum number in an array of numbers.

const findMaxNumberInArray = [3, 10, 23, 42, 55, 12, 7, 4, 90];
let maxNumberInArray= findMaxNumberInArray[0];

for(let i=0; i<findMaxNumberInArray.length; i++){

if (findMaxNumberInArray[i]> maxNumberInArray) {
    maxNumberInArray=findMaxNumberInArray[i];
};
};
console.log(maxNumberInArray);




console.log('- - - - - - - - exercise 5- - - - - - - - - ');
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [10, 1, 23, 42, 55, 12, 7, 4];
let minNumberInArray=findMinNumberInArray[0];
for(let i=0;i<findMinNumberInArray.length;i++){
    if(findMinNumberInArray[i]<minNumberInArray){minNumberInArray=findMinNumberInArray[i]}{
        
    }
}console.log(minNumberInArray);

console.log('- - - - - - - exercise 6- - - - - - - - - - ');
// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum';
let arr = string.split("");
let reverseArr=[];
for(i=arr.length-1;i>=0;i--){
 reverseArr.push(arr[i]);
}
console.log(reverseArr.join(""));
console.log('- - - - - - - - exercise 7- - - - - - - - - ');
// 7. Write a while loop that counts from 10 to 1 and prints out each number.



let a=10;
while(a>0){
    console.log(a);
    a--;
   
}

console.log('- - - - - - - - - exercise 8- - - - - - - - ');
// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.

let randomNumber =1;
let count =0;
while(randomNumber<8){
    randomNumber=Math.ceil(Math.random()*10);
    console.log(randomNumber);

    count++
   

}
console.log("number of iterations are: "+count);

console.log('- - - - - - - - exercise 9- - - - - - - - - ');
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.
let x=1;
do{
    console.log(x);
x++;

}while(x<11);

console.log('- - - - - - - - exercise 10- - - - - - - - - ');
// 10. Write a for...in loop that prints out the keys and values of an object.
let person = {name: "John", surname: "Doe", age: 30, city: "New York"};

for(let keyValue in person){
    console.log(keyValue+":"+person[keyValue]);
}

console.log('- - - - - - - - exercise 11- - - - - - - - - ');
// 11. Write a for...in loop that sums the values of an object.
let obj = {a: 10, b: 20, c: 30};
let sum=0;
for(let number in obj){
sum =sum+obj[number];
}
console.log(sum);
