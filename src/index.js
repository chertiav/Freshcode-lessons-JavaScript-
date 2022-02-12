// alert('I like JavaScript');
// let tree;

// первая часть
let caset = 20;
const newTree = 12;
let str = 'Stiga';
let logic = true;
let nullable = null;
// console.log(nullable);
// console.log(typeof nullable);

// вторая часть
// преобразования числа получаемого через форму в число

// let fromHTML = Number (prompt('Enter a number'));
// console.log ( typeof fromHTML)

// третья часть условная конструкция 

// if(typeof str === 'string'){
//     console.log('It string');
// }

// if(typeof logic === 'string'){
//     console.log('It string');
//     // console.log('It string');
// }else if(typeof logic === 'boolean'){
//     console.log('It boolean');
// }else {
// }



// Условный (тернарный) оператор

// условие ? выражение1 : выражение2
// условие
// Выражение, принимающее значение true или false.
// выражение1, выражение2
// Выражения, значения которых могут принадлежать любому типу. 


// let result = (caset >25) ? 17 : (caset === 20) ? 'true' : 'false';
// console.log(result)


// let one = 10;
// let two = 20;
// let three = 30;


// let result = (one > 8) ? 'one' : (two === 10) ? 'two' : (three === 30) ? 'three' : 'false';
// console.log(result);



// switch

const sum = function(a, b){
    return a + b;
}

const sub = function(a, b){
    return a - b;
}

const div = function(a, b){
    return a / b;
}

const mul = function(a, b){
    return a * b;
}

const calculate = function(num1, num2, mathOperation){
    if (isNaN(num1-num2)){
        return 'Enter number, please'
    }

let operation;

switch (mathOperation) {
    case '+' : {
        operation = sum;
        break;
    }
    case '-' : {
        operation = sub;
        break;
    }
    case '/' : {
        operation = div;
        break;
    }
    case '*' : {
        operation = mul;
        break;
    }
    default: {
        console.log('Unknown math operation')
    }
}
if(typeof operation === 'function'){
    return operation (num1, num2);
} else{
    return 'Unknown math operation';
}

}

const userInp1 = Number(prompt('Enter first number'));
const userInp2 = Number(prompt('Enter first number'));
const mathOperation = prompt('Enter math operation');

const result = calculate(userInp1, userInp2, mathOperation);
console.log(result);




