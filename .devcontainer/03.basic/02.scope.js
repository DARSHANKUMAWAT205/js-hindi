

var a = 23;         // global scope
{
    if(true){
    let a= 23;
    const b= 34;            // block scope
    var c = 65;   
    }          // 
}

// console.log(a);      
// // console.log(b);       // show error
// console.log(c);

function one (){
    const username = "darshan"
    
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    // two()
}

// one()

if(true){
    const username = "darshan"
    
    if(username === "darshan"){
        const website = "Youtube"
        // console.log(username + website)
    }
    // console.log(website)            // variable cannot be access outside of scope

}
// console.log(username)           // variable cannot be access outside of scope


// **************** interesting *******************

console.log(one(5));

function one(num){
    return num + 1
}

addtwo(5)                   // error due to hoisting ( cannot access before decleration)

const addtwo = function(num){
    return num + 2
}
