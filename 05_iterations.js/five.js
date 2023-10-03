const coding = ["js","ruby","java","python","cpp"];


//in call back fuction we dont have name of function

// coding.forEach( function (item){
//   console.log(item)
// } )

// coding.forEach( (item) =>{
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

coding.forEach( (item,index , arr)=>{
    console.log(item,index , arr )
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "java",
    },
    {
        languageName: "javat",
        languageFileName: "java",
    },
    {
        languageName: "python",
        languageFileName: "js",
    },
]

myCoding.forEach( (item)=> {
    console.log(item.languageName);
})