//var declration
var o=2;

//let declration
let result=10+5*2;
console.log(result);


//const declration
const i=2;
//i=2;//error

//number
let j=2;

//string
let c='sudeep';

//boolean
let isValid=true;

//undefined
let d;

//null
let s=null;

//BigInt
let f=234567897654324567890876n;

//arthimatic
let a = 10;
let b = 3;

console.log(a + b); //13
console.log(a - b); //7
console.log(a * b); //30
console.log(a / b); //3.333...
console.log(a % b); //1
console.log(a ** b); //1000

a++; //11
b--; // 2


//assingment
let num = 10;
num += 6;   //16
num *= 2;  // 30
num %= 4;  // 2

//comparision
let x = 5;
let y = '5';

console.log(x == y);  // true 
console.log(x === y); // false 

console.log(x != y);  // false
console.log(x !== y); // true

console.log(x > 3);   // true
console.log(x <= 5);  // true

//logical
let isAdult = true;
let hasTicket = false;

console.log(isAdult && hasTicket); // false
console.log(isAdult || hasTicket); // true
console.log(!isAdult);             // false

//1.precedence
let r = 5 + 5 * 2; 
console.log(r);// 15

//2.precedence
let t = 5 + 5 / 2; 
console.log(t);// 7.5


// Type Conversion
let numStr = '1236546546546';
let n= Number(numStr); 
let str1 = String(n); 
console.log(typeof n); // 'number'
console.log(str1)

let bool = Boolean(0); 
let str = String(100); 

// Type Coercion
console.log('5' * 5); //25 
console.log('5' + 5); //'55' 



//Array
let numbers = [1, 2, 3, 4, 5];
// map()
let doubled = numbers.map(num => num * 3);
console.log(doubled); // [ 3, 6, 9, 12, 15 ]

//1.function
const obj = {
    name: "Normal Function",
    showName: function() {
        console.log(this.name);
    }
};
obj.showName()//Normal Function

//2.function
// Arrow Function
const ob = {
    name: "Function",
    showNam: () => {
        console.log(this.name);
    }
};
ob.showNam();//undefined

//   1.Array
let fruits = ['apple', 'banana'];

// Adding 
fruits.push('orange'); // ['apple', 'banana', 'orange']

// Removing 
let last = fruits.pop(); // ['apple', 'banana']

// map
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ['APPLE', 'BANANA']

//2.Array
let cars = ['ferrari', 'maserati'];

// Adding 
cars.push('BMW'); // ['ferrari', 'maserati', 'BMW']

// Removing 
let la = cars.pop(); // ['ferrari', 'maserati']

cars.unshift('Lamborgini');

// map
let upperCars = cars.map(car => car.toUpperCase());
console.log(upperCars); // ['LAMBORGINI','FERRARI', 'MASERATI']

cars.shift();
console.log(cars);//['ferrari', 'maserati']

