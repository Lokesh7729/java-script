// Primitive 

// 7 types : String ,Number , Boolearn , null , undefined, Symbol (used to make component unique), BigInt

// --- 

const score = 100 
const scoreValue = 100.3

const isLonggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123');
console.log(id === anotherId); // not same because they have unique id

const bigNumber = 2649363949236062n

const heros = ["shaktian", "naagraj","doga"];

let myObj = {
    name : "lokesh",
    age: 20,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof scoreValue);

//Reference (NOn primitive)

// Array, Objects, Functions



//NULL => Object




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (Primitive), Heap (Non - Primitive)

let myYoutubename = "lokeshchauhandotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"


console.log(myYoutubename);
console.log(anothername);


let user = {
    email: "user@google.com",
    upi: "user@ybl",
}
