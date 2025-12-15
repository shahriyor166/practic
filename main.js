const a = Number(prompt("enter first number "));
const b = Number(prompt("enter second number "));
const result =prompt('enter operation which you would like to do');
if (result == '+' ){
    console.log(a + b)
}
else if (result == '/' ){
    console.log(a / b)
}
else if (result == '-'){
    console.log(a - b)
}
else if (result == '*'){
    console.log(a * b)
}
else if (result == '**'){
    console.log(a ** b)
}
else {
    console.log('operation is not avilable ')
}
