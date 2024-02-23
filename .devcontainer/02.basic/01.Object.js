// Singleton

// object Literal 

const mySym = Symbol("key1")

const Ob = {
    name : "darshan",
    "full name" : "darshankumawat",
    [mySym] : "mykey1",               // [] needed for declaration of Symbol.
    email : "dkkumawat@gamil.com",
    IsLogedIn : false,
    LastlogedIN : ["Monday", "Saturday"]
}

console.log(Ob.name);          // you can get output of object enteries which is declared using " " colon.

console.log(Ob["full name"]);    // '[]' access any object enteries with square bracket.

console.log(Ob.email);
console.log(Ob[mySym]);
// Object.freeze(Ob);          // it stop the made change in object 
Ob.email = "dkumawat@gmail.in"

console.log(Ob.email)

console.log(Ob);