let str = "ramakrishna";
console.log(str.length);
console.log(...str);
console.log(str.toUpperCase());

let str1 = new String("hello")
console.log(str1);
let str3 = "kodimoju";
console.log(str3.concat(" "+str));
console.log(str.includes("rama"));
console.log(str.indexOf("0"));
///ramakrishna
///012345678910
console.log(str.slice(0,4));
console.log(str.slice(0,-4));

let strFruits = "apple,banana,cherry";
let fruits = strFruits.split(",");
console.log(fruits); 
console.log(str.replace("is","us"));

let today = new Date();
console.log(today);
let today1 = new Date(2024,8,20,11,3,45,20)//months dtarts from 0
console.log(today1);
let today2 = new Date(2022,12)
console.log(today2);
let year = new Date().getFullYear()
console.log(year);
let yearPast = new Date();
yearPast.setFullYear(2022);
console.log(yearPast);






