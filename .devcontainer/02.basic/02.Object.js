
// const Ob1 = new Object();            //singleton

//const Ob1 = {}         // non-singleton / literal

const tenderUser = {}

tenderUser.id = "darshan"
tenderUser.email = "darshan@gmail.com"
tenderUser.IslogedIn = false 

// console.log(tenderUser);

const ob1 = { 1 : "a" , 2 : "b" }
const ob2 = { 3 : "a" , 4 : "b" }
const ob4 = { 5 : "a" , 6 : "b" }

// const ob3 = { ob1, ob2 }       // object are store as it is.

// const ob3 = Object.assign({}, ob1, ob2, ob4)        // {} provide empty target to store source (ob1, ob2, ob4)

const ob3 = {...ob1, ...ob2, ...ob4}            // object are stored with spread operator (...objectname)

// console.log(ob3);

const regularUser = {
    "email" : "abcd@email.in",
    fullname : {
        Username : {
            firstname : "darshan",
            lastname : "kummawat"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.Username.firstname);

const user = [
    {
        id : "skjafkj",
        email : "asdf@sd.in"
    },
    {
        id : "shuiweu",
        email : "hdgf@ssd.in"
    },
    {
        id : "kmkmcks",
        email : "ertji@sd.in"
    }
]

// console.log(user[0].email)
// console.log(user[1].email)
// console.log(user[2].email)

// console.log(tenderUser);
// console.log(Object.keys(tenderUser));
// console.log(Object.values(tenderUser));
// console.log(Object.entries(tenderUser));

//............deconstructing..........//

const course = {
    course : "javascript",
    fee : "1000",
    instructor :"darshan"
}
course.instructor

const {instructor : tutor} = course;

 // console.log(course.instructor);
console.log(tutor);


// {  
//     "course" : "javascript",
//     "fee" : "Free",                  //json          APIs
//     "instructor" :"darshan"
// }

// [
//     {},
//     {},
//     {}
// ] 