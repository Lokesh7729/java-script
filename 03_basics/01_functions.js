function sayMyname(){
console.log("l");
console.log("0");
console.log("K");
console.log("E");
console.log("S");
console.log("H");

}
// sayMyname()

// function addTwoNumbers(number1,number2){//parameters
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){//parameters
    // let result = number1+number2;
    // return result
    return number1+number2
}
const result = addTwoNumbers(3,5) // arguments
// console.log("result", result);


function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Lokesh"));
console.log(loginUserMessage());

