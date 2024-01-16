function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
function operate(a,b,operator){
    operation = {
        "+" : add(a,b),
        "-" : subtract(a,b),
        "*" : multiply(a,b),
        "/" : divide(a,b)
    }
    return operation[operator]
}


let firstNumber = 0;
let operator = "";
let secondNumber = 0;