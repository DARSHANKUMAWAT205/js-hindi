
const user = {
    username : "drashan",
    age : 19,
    price : 399,

    WelcomeMessage : function(){
        console.log(`${this.username},Welcome to website`)
        // console.log(this);
    }
}
// user.WelcomeMessage()
// user.username = "Sam"
// user.WelcomeMessage()
// console.log(this);          // output "{}" in terminal but in brower console its output is "window".

function one() {
    let username = "darshan"
    // console.log(this);
}
// one()

// const one2 = function() {
//     let username = "darshan"
//     console.log(this.username);
// }

// const one2 = () => {
//     let username = "darshan"
//     console.log(this);
// }
// one2()


// () => {}            //  ARROW FUNCTION

//  const arrow = (num1, num2) => {         // basic arrow f. // explicit return
//     return num1 * num2
//  }

// const arrow = (num1, num2) => num1 * num2           // implicit return

// console.log(arrow(6,7))

// const arrow = () => {username : "darshan"}          // "undefined" due to object declaration "{}".
const arrow = () => ({ username : "darshan"})           // for object

 console.log(arrow())

// const result = arrow(6,7);
// console.log(result)
