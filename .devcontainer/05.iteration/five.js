// *************** ForEach loop **************
// const myArr = prompt("Enter ten number");

const myArr = [1, 2, 3, 4, 5]

myArr.forEach((index) => {
    if(index == 5){
        let deletedkey = myArr.splice(4,1)
        console.log(deletedkey);
    }
})
console.log(myArr)