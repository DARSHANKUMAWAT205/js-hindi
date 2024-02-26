// // for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     // console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//     if(i == 5){
//         // console.log(`${i} is the best number`);
//     }
//     // console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//     // console.log(`Outer loop is ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value is ${j}. Inner loop is ${i}`);
//         if (i == i*j) console.log(`table of ${i}`);
//         // console.log(`${i} * ${j} = ${i*j}`); 
//     }
    
// }

// // const myArray = [2, 4, 4, 5, 7, 8, 9, 3]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     // console.log (element);
// }

//              FOR OF   loop  

// const myArray = [2, 4, 4, 5, 7, 8, 9, 3]

// for (const num of myArray){
//     console.log(myArray)
// }

const greeting = "hello! world"

for (const greet of greeting) {
    if (greet == ' '){
        continue
    }
    // console.log(greet);
}

// const myArray = [2,4,4,5,7,8,9,3]

// function deleteAnElement(element){
//     for (const num of myArray){
//     if (num == element){
//             console.log(myArray)
//             let deletedelement = myArray.splice(5,1)
//             console.log(myArray)
//             console.log(`${deletedelement} is deleted from myArray`);
//         } 
//     }
// }

// deleteAnElement(myArray[2]);


const map = new Map()

map.set('In','India')
map.set('USA','United State Of America')
map.set('Fr','France')

// console.log(map)
 
// for (const [key , value] of map) {
//     console.log(`${key} :- ${value}`)
// }


const myObject ={
    name : 'darshan',
    place : 'jaipur',
    State : 'rajasthan'
}

for ( const [key,value] of myObject){           // not iterable for now study more later 
    console.log(`${key} :- ${value}`)
}