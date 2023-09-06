// singleton
// Object.create
// object literals 

const muySym= Symbol("key1")

const JsUser = {
    name: "lokesh",
    age:18,
    "full name ": "lokesh chauhan",
    [muySym]:"mykey1",
    location: "Indore",
    email: "lokeshchauhan@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]

}

// console.log(JsUser["email"])
// console.log(JsUser.email)
console.log(JsUser["full name "])
console.log(JsUser[muySym])



JsUser.email= "lokesh@chatai.com"
// Object.freeze(JsUser)
JsUser.email="miceor@gmai.com"
// console.log(JsUser);



JsUser.greeting = function(){
    console.log(`hello goodmorning ${this.name}`);
}
console.log(JsUser.greeting())




