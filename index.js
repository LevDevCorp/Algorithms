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



//node არის linkedlist ის ელემენტი
class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;  
    }
    //ამატებს Node-ის ობიექტს LInkedListში
    add(element) {
        let node = new Node(element);
        let current;
        //თუ linkedListის პირველი ელემენტი არ არსებობს, ვამატებთ მას
        if (this.head == null)
            this.head = node;
        else {
            //ყველა არსებული ელემენტი გადადის მის შემდეგ ელემენტზე
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        // LinkedList-ის ზომას ზრდის ერთით
        this.size++;
    }

    insertAt(element, index) {
        //
        if (index > 0 && index > this.size)
            return false;
        else {
            let node = new Node(element);
            let curr, prev;

            curr = this.head;
            //პირველ ელემენტად შეყავს ეს ობიექტი
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;
                //ყველა არსებული ელემენტი გადააქვს მომდევნო ელემენტის ადგილას
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                //ესენი არის ბოლოს შემოტანილი ელემენტები
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    //ვშლით ელემენტს გადმოცემული პარამეტრის მიხედვით
    removeFrom(index) {

        if (index > 0 && index > this.size)
            return -1;
        else {
            //
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;

            return curr.element;
        }
    }

    removeElement(element) {
        let current = this.head;
        let prev = null;
        //ეძებს შეყვანილ ელმენტს  Linkedlist-ის ელემენტებში
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    //პოულობს რომელი ადგილი უკავია ამ კონკრეტულ ელემენტს
    indexOf(element) {
        let count = 0;
        let current = this.head;

        while (current != null) {
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    size_of_list() {
        console.log(this.size);
    }
    //გამოაქვს LinkedListის ობიქტის ელემენტები
    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }


}

let ll = new LinkedList();
console.log(ll.isEmpty());
ll.add(10);
ll.printList();
console.log(ll.size_of_list());
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.printList();

console.log(ll.removeElement(50));

ll.printList();

console.log("Index of 40 is: " + ll.indexOf(40));

ll.insertAt(60, 2);

ll.printList();

ll.removeFrom(3);

ll.printList()