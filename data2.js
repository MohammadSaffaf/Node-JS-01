const name ="Supermann"
const isTrue = false
const arr= [2,435,67,789,90,34]
const myObj ={
    name : "John DDoe",
    age : 22
}
function saySomthing(){
    console.log("Hallo Function");
}
// mehrere Sachen Exxpotieren => object
// module.exports.nameKey = name;
// module.exports.kim = isTrue;
// module.exports.francis  = arr;
// module.exports.aos = myObj;
// module.exports = {
//     mohammad:name,
//     mirnel:isTrue,
//     hakan:arr,
//     asad: myObj,
//     raquel:saySomthing

// }
module.exports = {
   name,
    isTrue,
   arr,
     myObj,
    saySomthing

}