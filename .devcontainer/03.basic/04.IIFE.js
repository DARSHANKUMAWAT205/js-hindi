
// Immediatially Invoked Function Expression

(function chai(){                   // named IIFE.
    console.log("Db connected")
})();                               // ";" is used to end iife func.

(() => {
    console.log("Db connected two")
})();  

((name) => {
    console.log(`${name} DB Connected`)             // passed parameter in IIFE.
})("Darshan");



