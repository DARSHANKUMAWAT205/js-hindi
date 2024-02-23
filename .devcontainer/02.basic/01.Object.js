// Singleton

// object Literal 

const mySym = Symbol("key1")

const Ob = {
    name : "darshan",
    "full name" : "darshankumawat",
    [mySym] : "mykey1",
    email : "dkkumawat@gamil.com",
    IsLogedIn : false,
    LastlogedIN : ["Monday", "Saturday"]
}

console.log(Ob.name);
console.log(Ob["full name"]);
console.log(Ob.email);
console.log(Ob[mySym]);

Ob.email = "dkumawat@gmail.in"
console.log(Ob.email)