//objects literals

let mobile ={
    company:"nokia",
    color:"red",
    manyear:2015

}
console.log(mobile);
// /////////
////////////USING CONSTRUCTOR FUNCTION////
function Mobile(company,color,manyear){
    this.company=company,
    this.color = color,
    this.manyear = manyear
    this.Osversion = 10
}
let nokia  = new Mobile("nokia","red",2015);
console.log(nokia);
console.log(nokia.color);
console.log(nokia.Osversion);

let sony =  new Mobile("sony","black")
sony.company="ericson";
console.log(sony);
console.log(sony instanceof Mobile);
console.log(sony.constructor===Mobile);

console.log(sony);

///////call value and reference value//////////////
let a= 10;
var b =a;
var b=100;
console.log(a)
console.log(b)


;
/////
let arr1 = [1,2,3,4]
// var arr2 = [5,6,7,8]
// console.log(arr1===arr2);
let arr2=arr1
console.log(arr1)
console.log(arr2);
arr2.push(8)
console.log(arr1)
console.log(arr2);

;










