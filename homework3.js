//slice()
let a=[1,2,3,4,5];
let arr=a.slice(2,4);
console.log(arr);

let b=[123,'abc',456,'def'];
let arr1=b.slice(0,3);
console.log(arr1);

//splice()
arr=a.splice(3,1,10);
console.log(arr);
console.log(a);

arr1=b.splice(2,0,'ghi');
console.log(b);
console.log(arr1);

//forEach()
let s=0;
a.forEach(n => s=s+n);
console.log(s);

let m=1;
a.forEach(n => m=m*n);
console.log(m);

a.forEach(n => b=String(n));
console.log(b);

//map()
let game=['hockey','cricket'];
let upperGame=game.map(games => games.toUpperCase());
console.log(upperGame);

let stu=['radhe','sudeep'];
let upperStu=stu.map(stus => stus.toUpperCase());
console.log(upperStu);

//reduce()
const mul = a.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(mul);

const names = ['Alice', 'Bob', 'Charlie'];
const concatenatedNames = names.reduce((acc, name) => acc + ', ' + name);
console.log(concatenatedNames);

const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const itemCount = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
},{});
console.log(itemCount);

//filter
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 15 },
    { name: 'Charlie', age: 20 }
];
const adults = people.filter(person => person.age >= 18);
console.log(adults);

//Q2
let array=[1,2,3,4,5,6];
array.unshift(0);//number at beginning
array.push(7);//number at end
console.log(array);
array.splice(1,1);
console.log(array);
s=0;
array.forEach(n => s=s+n);
console.log(s);

//Q3
let input='100';
let ci=Number(input);
console.log(ci+50);

//hof
function filterArray(array, condition) {
    return array.filter(condition);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  const evenNumbers = filterArray(numbers, num => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]


//lexical and clouser
function outers() {
	let name = "Kumar";
	function inner() {
		console.log("Hello, " + name + "!");
	}
	return inner;
}
let greeting = outers();
greeting();

let user ={
    id:1,
    userName:'johnDoe',
    email:'dfvdfvdfdf.com',
};
console.log(user);
console.log(user.id);
console.log(user.email);
console.table(user);

let { userName , email} =user;
console.log(userName);
console.log(email);