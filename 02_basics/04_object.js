const tinderUser= {}

tinderUser.id = "123ABS"
tinderUser.name= "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "lokesh",
            lastname: "chauhan"
        }
    }
}

// console.log(regularUser. fullname)


const obj1={
    1: "a" , 2: "b"
}
const obj2={
    3: "a" , 4: "b"
}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)


const obj4= {...obj1, ...obj2}
console.log(obj3)


//DATA BASE SE VALUR AYEGI
 const users= [
    {
        id : 1,
        email: "l@gmail.com"
    },
    {
        id : 1,
        email: "l@gmail.com"
    },
    {
        id : 1,
        email: "l@gmail.com"
    },
    {
        id : 1,
        email: "l@gmail.com"
    },
    {
        id : 1,
        email: "l@gmail.com"
    },
    {
        id : 1,
        email: "l@gmail.com"
    },
 ]

 users[1].email
 console.log(tinderUser)


 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));