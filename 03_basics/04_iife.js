// Imdediately invoked function expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();


// global score ke pollution se problem hoti hai kai baar uss varible aur pollution ko haatne ke liye IIFE ka use kiyaa


( () => {
    console.log(`DB Connected`);
} )();
( (name) => {
    console.log(`DB Connected two ${name}`);
} )('lomkii')