
// **************** ForIn loop **********

const Myobject = {
   name :"darshan",
    lastname:"kumawat",
    gender:"male",                              // Object
    occupation:"Student"
}
for (const key in Myobject) {
    // console.log(key + ":-" + Myobject[key]);            
}


const arr = [ "js" ,"cpp", "py", "java"]            // Array

for (const key in arr) {
    // console.log(key + ":-" + arr[key] )
}



const map = new Map()

map.set('In','India')
map.set('USA','United State Of America')
map.set('Fr','France')
                                                    // map are non iterable
for (const key in map) {
    console.log(key)
}