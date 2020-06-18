function factorial(num){
    factorialnum = 1;
    for(let i = num; i > 0; i--){
        factorialnum = factorialnum * i;
    }
    return factorialnum;
}
//console.log(factorial(8));

function celsiusToFahrenheit(C){
    return F = (C * 9/5) + 32;
}

function fahrenheitToCelsius(f){
    return C = (f- 32) * 5 / 9;
}

//console.log(CelsiusToFahrenheit(40));
//console.log(FahrenheitToCelsius(140));

function divider(number1,number2){
        for(let i = number2; i>1; i--){
            num1 = number1 % i;
            num2 = number2 % i;
            if(num1 === 0 && num2 === 0){
                return i;
            }
        }
}

console.log(divider(126,48));