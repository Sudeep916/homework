//destructuring
let user ={
    id:1,
    userName:'johnDoe',
    email:'dfvdfvdfdf.com',
};

let { userName , email} =user;
console.log(userName);
console.log(email);
console.log('v')

//calculate
function calculate(a,b,c) {
    switch (c) {
        case "*":
            console.log(a * b);
            break;
        case "/":
            console.log(a / b);
            break;
        case "+":
            console.log(a + b);
            break;
        case "-":
            console.log(a - b);
            break;
    }
};
calculate(2,7,'*');
calculate(2,7,'/');
calculate(2,7,'+');
calculate(2,7,'-');

//closure
function counter() {
	let n=3;
	function number() {
        ++n;
		console.log(n);
	}
	return number;
}
let number = counter();
number();

//Q1 
function power(exponent) {  
    return function(base) {  
        return Math.pow(base, exponent);  
    };  
}  

// Example usage:  
const square = power(2); 
console.log(square(5)); // Outputs: 25  

const cube = power(3);   
console.log(cube(2)); // Outputs: 8

//Q2
const users = [  
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },  
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },  
    { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' }  
];  

users.forEach(({ name, email }) => {  
    console.log(`Name: ${name}, Email: ${email}`);  
});

