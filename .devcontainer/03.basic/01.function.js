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
console.log(localfunction("Drashan"));