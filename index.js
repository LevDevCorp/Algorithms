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

//console.log(divider(126,48));

// function linkedLists(){
//     this.head = null;
// }

// linkedLists.prototype.isEmpty = function(){
//     return this.head === null;
// };

// linkedLists.prototype.size = function(){
//     let current = this.head;
//     let count = 0;
    
//     while(current !== null){
//         count++;
//         current = current.next;
//     }
//     return count;
// };

// linkedLists.prototype.prepend = function(val){
//     let newNode = {
//         data: val,
//         next: this.head
//     };

//     this.head = newNode;
// };

// let list = new linkedLists();
// list.prepend(5);
// list.prepend(10);




class linkedlist {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data){
        this.head = new Node(data,this.head);
    }



    function Node(data,next = null){
            this.data = data;
            this.next = next;
    }
}

let list1 = new linkedlist();
list1.Node(158);

console.log(list1);