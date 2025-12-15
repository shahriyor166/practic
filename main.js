// const a = Number(prompt("enter first number "));
// const b = Number(prompt("enter second number "));
// const result =prompt('enter operation which you would like to do');
// if (result == '+' ){
//     console.log(a + b)
// }
// else if (result == '/' ){
//     console.log(a / b)
// }
// else if (result == '-'){
//     console.log(a - b)
// }
// else if (result == '*'){
//     console.log(a * b)
// }
// else if (result == '**'){
//     console.log(a ** b)
// }
// else {
//     console.log('operation is not avilable ')
// }
// function addition(num1,num2){
//     console.log(num1 + num2)
// }
// addition(189,190)
const array = ['paris','munchen','zurich','new-york','london']
array.push('tashkent','moskow')
array.splice(4,2)
array.unshift('qatar')
array[3]='maxachkala'
console.log(array);
array.forEach(function(element, index){
    console.log(element, index); 
})

