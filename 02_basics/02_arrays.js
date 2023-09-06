const marvel_heros= ["thor","ironman","spiderman",]
const dc_heros=["superman", "flash","batman"]

// marvel_heros.push(dc_heros)


// console.log(marvel_heros);
// console.log(marvel_heros[3][1])


// let army= marvel_heros.concat(dc_heros)
// console.log(army);


// spred operator - kaach ka glass drop kar do
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)


const another_Array=[1,2,3[4,5,6],7,[6,7,[4,5]]]
const real_another_array= another_Array.flat(Infinity)
console.log(real_another_array);




console.log(Array.isArray("lokesh"))
console.log(Array.from("lokesh"))
console.log(Array.from({name : "lokesh"})) // interesting caseee




let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))