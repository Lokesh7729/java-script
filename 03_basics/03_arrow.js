const user ={
    username:"lokesh",
    price:100,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "lokesh"
//     console.log(this.username);
// }
// chai()

//     const chai = function(){
//     let username = "lokesh"
//     console.log(this.username);

// }



// ARROW FUNCTION

// const chai = () => {
//     let username = "lokesh"
//     console.log(this.username);

// }
// chai()


// const addTwo = (num1, num2)=> {
//     return num1 + num2
// }

// const addTwo = (num1, num2)=>  num1 + num2
// const addTwo = (num1, num2)=>  (num1 + num2)

const addTwo = (num1, num2)=>  ({username:"lokesh"})

console.log(addTwo(4,7))

// const myArray=[2,4,5,3,24,5]
// myArray.forEach()
