function saymyName (){
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}

// saymyName();

function addTwoNo(num1, num2){
    console.log(num1 + num2)
}

// addTwoNo(4,5);

function SumofNum(a , b){
//     sum = a + b;
//     return sum;
    return a + b;
}

const result = SumofNum(3,4);
// console.log(result);

function localfunction(username = "Sam") {
    if(username === undefined){         // if (!username)
        console.log("Please enter the username");
        return
    }
    return `${username} is just logedIn`;
}

// console.log(localfunction());
// console.log(localfunction("Drashan"));


function getcartprice (...num1) {               // rest operator
    return num1
}

// console.log(getcartprice(200, 400, 500, 2000))

const user ={
    username : "darshan",
    prices : "999"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and it price is ${anyobject.prices}`)
    return
}

// handleObject(user);
// handleObject({
//     username : "sam",
//     prices : "399"
// })

const myArray = [200, 300, 400, 500]

function getSecondvalue(getarr){
    return getarr[1]
}

// console.log(getSecondvalue(myArray));
console.log(getSecondvalue([200, 300, 400, 500]));                                      



    // to remove 'git init' repo use '****    Remove-Item -Recurse -Force .\.git   ****'