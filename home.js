// console.log("hello");
// // alert("hello");
// //youtube 8 hours course

// var b = 'soneting';
// console.log(b);

// // var age = prompt("what is your age?");

// // document.getElementById("sometax").innerHTML = age;

// var num1 = 10;
// // increment num1 by 1
// num1++;

// // decrement num1 by 1
// num1--;

// console.log(num1);

// //divide / multiply *, remainder %,
// console.log(num1 % 6);

// // increment/decrement by 10
// num1 += 10;
// console.log(num1);

// /*funcitons
// 1.create a function
// 2.call the funciton
// */

// //crate
// function fun(){
//     console.log("this is a function");
// }
 
// //call
// fun();

/* let's create a function that take in a name
and says hello followed by your name

for  example

name: "qazi"
return: "hello qazi"
*/

// function greeting(yourname){
//     var result = 'hello ' + ' ' + yourname; // string concatnation
//     console.log(result);
// }

// var name = prompt('what is your name?');
// greeting(name);


// how do arguments work in funciton?
// how do we add 2 numbers together in a fuction?

// function sumNumbers(num1, num2){
//     var result = num1 + num2;
//     console.log(result);
// }

// sumNumbers(10, '10');

/* while loops 

var num = 0;

while (num < 0) {
    num += 1
    console.log(num);
}

*/

//for loop

// for (let num = 0; num < 10; num++) {
//     console.log(num);
// }

// //data types
// var yourAge = 18; // number
// let yourName = 'Bob';// string
// let name = {first: 'Jane', last: 'Doe'};// object
// let truth = false; //boolean
// let groceries = ['apple', 'banana', 'orange'];//array
// let nothing = null;//value null

//strings in Javascript (common methods)
let fruit = 'banana,apple,orange,blackberry';
let moreFruits = 'banana\napple';  //new line
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));// split by a comma
console.log(fruit.split(''));// split by a caharacter

// // Array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
//  fruits = new Array('banana', 'apple', 'orange', 'pineapples');

// alert(fruits[2]); // acces value at index 2nd

// fruits[0] = 'pear';
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// array common methods
console.log('toString', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); //remove last items
console.log(fruits.push('blackberries'), fruits); // appends
console.log(fruits[3]);
fruits[fruits.length] = 'new fruit'; //same as push
console.log(fruits);
fruits.shift(fruits);  //remobe first element from a list
console.log(fruits);
fruits.unshift('kiwi'); //add first element to an array
console.log(fruits);
let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 4, 2, 4]
console.log(someNumbers.sort(function(a, b) {
    return a - b
})); // sorted in ascending order but return  b - a descending order

let emtyArray = new Array();
for (let num = 0; num < 10; num++){
    emtyArray.push(num);
}
console.log(emtyArray);

// in this video common methods






