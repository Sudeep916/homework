numbers=[1,2,3,4,5,6]
//filter
const greaterThanTwo = numbers.filter(num => num > 2);
console.log(greaterThanTwo); // [3, 4]

//reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

const max = numbers.reduce((max, current) => current > max ? current : max, 0);
console.log(max);

//forEach()
let total = 0;
numbers.forEach(num => total += num);
console.log(total);

//function
let a=3;
let b=4;
function calculator(a,b,c){
    switch (c) {
        case '+':console.log(a+b);
            break;
        case '-':console.log(a-b);
            break;
        case '*':console.log(a*b);
            break;
        case '/':console.log(a/b);
            break;
        default:console.log("Invalid Input")
            break;
    }
};
calculator(a,b,'+');
calculator(a,b,'-');
calculator(a,b,'*');
calculator(a,b,'/');