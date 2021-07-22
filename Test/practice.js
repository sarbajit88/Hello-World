// Get the sum of two arrays…actually the sum of all their elements. 

// const var1 = [1, 2, 3, 4, 5, 4];
// const var2 = [5, 9, 6, 4];
// //const sumvar1 = 0;
// //const sumvar2 = 0;
// const sum1 = (var1.reduce(sum)) + (var2.reduce(sum));

// function sum(total, value) {
//     return total + value;
// }
// console.log(sum1);


// OR
// var1.forEach(add1=>{
// sumvar1= sumvar1+add1;
// })
// var2.forEach(add2=>{
//     sumvar2= sumvar2+add2;
//     })
    



// console.log(sumvar1+sumvar2);


// Using a for loop print all even numbers up to 100 in an array. Don’t include 0.

// const even = [];
// for(let i = 1; i <=100; i++){
//     if(i %2==0){
//         even.push(i);
//     }
    

// }
// console.log(even);

// Using a for loop print all odd numbers up to 100 in an array. Don’t include 0.

// const odd = [];
// for(let i = 1; i <= 100; i++){
//     if(i % 2 != 0){
//         odd.push(i);
//     }
    

// }
// console.log(odd);


// Using a for loop output the elements in reverse order of an array

// const ori = [666,2,3,4,5,5,6,7,8,9,10];
// const orilen = ori.length; 
// // console.log(ori[orilen-1]) ---  if we provide variable[length it will provide the element in that index]
// const revori = [];
// for(i = orilen-1; i>=0;i--){
//     revori.push(ori[i])
// }
// console.log(revori);




// Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair. Assume both arrays are of the same length.


// const arr1 = [2,3,8,9];
// const arr2 = [9,6,87,4,5,2];
// let addarr = [];
//  for(i = 0; i < arr1.length; i++){
//     addarr.push(arr1[i] + arr2[i]);
//  }
//  console.log(addarr);

// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space. 

// let s = 'hello World';
// s = s.split("").map((letter,i) => (i%2)==0 ?
// letter.toUpperCase() : letter.toLowerCase())
// .join("");
// console.log(s)




// function greet(name){
//     `Blalalalala ${name}`
// }

// let v1= 'hhi';

// console.log(greet(v1))


// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not

// let s = "Yes or No";
// let p = s.split("");
// for(i = 0; i<p.length; i++){
// if(p[i]==='y')
// }


// console.log(p[0])








// Given a number n Calculate the factorial of the number 






// Write a program that will allow someone to guess a four digit pin exactly 4




// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right. 





// Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
// Palindrome: a word, phrase, or sequence that reads the same backward as
// forward, e.g., madam or nurses run.




// function sum(a,b){
//    s = a+b;
   
// }
// sum(5,8);
// console.log(s);







const obj = [
    {prod1 : 'Com', price : '200'},
    {prod2 : 'Mob', price : '500'},
    {prod3 : 'Pen', price : '100'},
]

const addObj = obj.map((val) => val.price);
console.log(addObj)