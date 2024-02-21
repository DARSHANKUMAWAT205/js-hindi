// array

const myArr = [1,2,3,4,5];
const myHeroes = ["iron", "thor", "superman", "sipderman"];

const arr = new Array(5,6,7,8,9)
// console.log(arr);

// array method

// myArr.push(6)
// myArr.push(9)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// const arr = myArr.join()

// console.log(myArr);
// console.log(typeof arr);

// slice and splice

console.log('a: ',arr);

const myn1 = arr.slice(1,3)
console.log('  ',myn1);
console.log('b: ',arr);

const myn2 =arr.splice(1,3)
console.log('  ',myn2);
console.log('c: ',arr);