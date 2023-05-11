// >> local
// >> global
// >> Enclose something

// var a = 10; //global
// function add(){
//     var b = 20
//     return a+b
// }

// console.log(">>>>a",a)
// console.log(">>>>add",add())
// console.log(">>>>b",b)


// >>>>a 10
// >>>>add 30
// console.log(">>>>b",b)
// ReferenceError: b is not defined

var a = 10; //global
for(i=0;i<5;i++){
     let b = 20;
     console.log(a+b+i)
}
console.log(">>>>a",a)
console.log(">>>>b",b)

30
31
32
33
34
>>>>a 10
 Uncaught ReferenceError: b is not defined
   


 ----------------------------------------

 var a = 10; //global
 for(i=0;i<5;i++){
      let b = 20;
      console.log(a+b+i),
      console.log(">>>>b",b)
 }
 30
 >>>>b 20
 31
 >>>>b 20
  32
  >>>>b 20
  33
 >>>>b 20
 34
 >>>>b 20
 undefined