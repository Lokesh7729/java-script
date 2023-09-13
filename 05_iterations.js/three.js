// for of


// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5,6,7]
for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello world !"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

// console.log(map);

for (const [key,value] of map) {
    console.log(key)
    
}

const myObject= {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key , value] of object) {
    
}

// for of is not applicable in object