//Primitive datatype

// 7-types : 

// numbers
// booleans
// strings
// BigInt
// null
// undefined
// symbols

const score =100
const scorevalue = 100.5
const Inlogedvalue = false
let outsidetemp =null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bignumber = 12233333333333n; 


// Reference (non-primitive) :

// Arrays, Objects, Function

const heroes = ['ironman','superman','thor'];

let myObj = {
    name : 'darshan',
    age: 21,
};

const myFunction = () => {
    console.log("hello.World");
}
console.log(typeof myObj);