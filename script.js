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
    const operation = {
        "+" : add(a,b),
        "-" : subtract(a,b),
        "*" : multiply(a,b),
        "/" : divide(a,b)
    }
    return operation[operator]
}

let firstNumber = "";
let operator = "";
let secondNumber = "";
let firstNumberFlag = true;
let numbers = document.querySelectorAll(".number");
let ops = document.querySelectorAll(".ops");
let currentScreen = document.querySelector("#currentScreen");
let lastScreen = document.querySelector("#lastScreen");
let del = document.querySelector("#delete");
let equ = document.querySelector("#equal");
let result = 0;
for(let number of numbers){
    number.addEventListener("click", () =>{
        if(firstNumberFlag){
            document.querySelector("#currentScreen").textContent += number.textContent;

            firstNumber += number.textContent;
        }else{
            document.querySelector("#currentScreen").textContent += number.textContent;
            secondNumber += number.textContent;
        }
})
    
}

for(let op of ops){
    op.addEventListener("click", () =>{
        operator = op.textContent;
        lastScreen.textContent = firstNumber + " " +  operator; 
        currentScreen.textContent = "";
        firstNumberFlag = false;
    })
}

let clear = document.querySelector("#clear");
clear.addEventListener("click",() =>{
    firstNumber = "";
    secondNumber = "";
    currentScreen.textContent = "";
    lastScreen.textContent = "";
    firstNumberFlag = true;
})
del.addEventListener("click",() =>{
    if(firstNumberFlag){
     if(firstNumber.length > 0){
        firstNumber = firstNumber.substring(0,firstNumber.length-1);
        currentScreen.textContent = firstNumber;
     }
     }else{
        if(secondNumber.length > 0){
            secondNumber = secondNumber.substring(0,secondNumber.length-1);
            currentScreen.textContent = secondNumber;
         }
     }
    })
equ.addEventListener("click", () =>{
        result = operate(Number(firstNumber),Number(secondNumber),operator).toPrecision(10);
        lastScreen.textContent += " " + secondNumber;
        firstNumber = "";
        secondNumber = "";
        console.log(result);
        currentScreen.textContent = result;
})

