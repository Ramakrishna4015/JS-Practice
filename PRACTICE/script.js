// var a=10;

// function test1(){
//     var x=10;
//     console.log("hello");
    
// }
// // console.log(x);
// console.log(b);
// var b=20;
// console.log(b);
// var c= 30;
// function test2(){
//     var x=10.5;
//     console.log(x);
    
// }
// var d=50;
// test2()
// test1()
// console.log(d);

// var a =10;
// a =20;
// console.log(a);
// function test1(){
//  a= 20;
// console.log(a);
// }
// console.log(a);
// test1();
// console.log(a);
// /FIRST CLASS FUNCTIONS
// ASSIGNING A FUNCTION TO A VARIABLE
// var a = function(){
//     console.log("hello00000000000");
    
// }
// a();
// // PASSSING FUCNTION AS ARGUMENT



// function sayHi(name){
//     return name;
// }
// const greet = sayHi;
// console.log(greet("RK"));

// function add(x,y){
//     return x+y;
    
// }
// function mul(x,y){
//     return x*y;
    
// }

//  function calculate(operation,x,y){
//     return operation(x,y)
//  }
//  console.log(calculate(add,5,5));
//  console.log(calculate(mul,5,5));
 
// "use strict"

//  var test;
// console.log(test);
// test = "value1";
// console.log(test);
// test = "update";
// console.log(test);


// const test;
// console.log(test);
// // test = "value2"
// // console.log(test);
// var a= 10;
// let b= 20;
// const c= 30;
// function test(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(x);
//     //console.log(y);
//     //console.log(z);
    
//     if(true){
//         var x=40;
//         let y =50;
//         const z = 60;
//         console.log(x);
//         console.log(y);
//         console.log(z);
//     }
//     console.log(x);
//     //console.log(y);
//     //console.log(z);
//  }
// test()
// console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(x);
//     console.log(y);
//     console.log(z);


//higher order functions
// function Outer(addres){
//     let a=10;
//     let b=20;
//     console.log("age is"+" "+ (a+b));
//     addres()
    
// }
// function printAddress(){
//     console.log("hyderbaad");
    
// }

// Outer(printAddress);

///returning a function

// function output(){
//     console.log(12+10);
//     return function(){
//         console.log("output is ");
//         return 10;
//     }
    
// }
// output()

// var a=output()();
// console.log(a);

/* function Output(Operation,a,b){

    return Operation(a,b)
    
}

function add(a,b){
    return a+b;
    
}
function mul(a,b){
    return a*b;
    
}
console.log(Output(add,5,6));
console.log(Output(mul,5,6));
 */



function processArray(arr,Operation){
    let result=[]
    for(i=1;i<arr.length;i++){
        result.push(Operation(arr[i]))
        
    }
    return result;

}
function double(num){
    return num*2
}
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = processArray(numbers, double);
console.log("Doubled Numbers: ", doubledNumbers);























