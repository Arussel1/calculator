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
    if(b == 0){
        return "Error";
    }
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
let floatFlag = true;
let numbers = document.querySelectorAll(".number");
let ops = document.querySelectorAll(".ops");
let currentScreen = document.querySelector("#currentScreen");
let lastScreen = document.querySelector("#lastScreen");
let del = document.querySelector("#delete");
let equ = document.querySelector("#equal");
let float = document.querySelector("#float");
let result = 0;
for(let number of numbers){
    number.addEventListener("click", () =>{
        if(firstNumberFlag){
            firstNumber += number.textContent;
            document.querySelector("#currentScreen").textContent = firstNumber;

            
        }else{
            secondNumber += number.textContent;
            document.querySelector("#currentScreen").textContent = secondNumber;
            
        }
})
    
}

for(let op of ops){

    op.addEventListener("click", () =>{
        if(secondNumber.length > 0){
        result = operate(Number(firstNumber),Number(secondNumber),operator);
        lastScreen.textContent += " " + secondNumber;
        firstNumber = result.toString();
        secondNumber = "";
        currentScreen.textContent = result;
        if(currentScreen.textContent.length > 12){
            currentScreen.textContent = currentScreen.textContent.substring(0,12);
        }
        }
        operator = op.textContent;
        lastScreen.textContent = firstNumber + " " +  operator; 
        currentScreen.textContent = "";
        firstNumberFlag = false;
        floatFlag = true;
    })
}

let clear = document.querySelector("#clear");
clear.addEventListener("click",() =>{
    firstNumber = "";
    secondNumber = "";
    currentScreen.textContent = "0";
    lastScreen.textContent = "";
    firstNumberFlag = true;
    floatFlag = true;
})
del.addEventListener("click",() =>{
    if(firstNumberFlag){
     if(firstNumber.length > 0){
        if(firstNumber.substring(firstNumber.length-1) == "."){
            floatFlag = true;
        }
        firstNumber = firstNumber.substring(0,firstNumber.length-1);
        if(firstNumber.length == 0){
            currentScreen.textContent = "0";
        }else{
            currentScreen.textContent = firstNumber;
        }
        
     }
     }else{
        if(secondNumber.length > 0){
            secondNumber = secondNumber.substring(0,secondNumber.length-1);
            currentScreen.textContent = secondNumber;
         }
     }
    })
equ.addEventListener("click", () =>{
    if(firstNumber.length > 0 && secondNumber.length > 0){
        result = operate(Number(firstNumber),Number(secondNumber),operator);
        lastScreen.textContent += " " + secondNumber;
        firstNumber = result.toString();
        secondNumber = "";
        firstNumberFlag = true;
        currentScreen.textContent = result;
        if(currentScreen.textContent.length > 12){
            currentScreen.textContent = currentScreen.textContent.substring(0,12);
        }
    }
        
})
float.addEventListener("click", () =>{
    if(floatFlag == true){
        floatFlag = false;
        if(firstNumberFlag){
            firstNumber += float.textContent;
            document.querySelector("#currentScreen").textContent = firstNumber;
    
            
        }else{
            secondNumber += float.textContent;
            document.querySelector("#currentScreen").textContent = secondNumber;
            
        }
    }
    
})
