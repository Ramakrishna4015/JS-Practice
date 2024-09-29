// function Person(name,role){
//     this.name = name;
//     this.role = role;
//     this.PrintDetails = function(){
//         console.log("my name is:"+name+"and my role is :"+role)
//         }

// }
// Person.prototype.CalculateSalary=function(){
//     if(this.role === "admin"){
//         return 20000;
        
//     }
//     if(this.role === "user"){
//         return 10000;
        
//     }
// }
// let Ram = new Person("Ram","admin")
// console.log(Ram);
// console.log(Ram.name);
// Ram.PrintDetails();

// let Shyam = new Person("Shyam","user")
// console.log(Shyam);
// console.log(Shyam.name);
// Shyam.PrintDetails();
// console.log(Shyam.CalculateSalary());


const myObject={
    name: "rk",
    greet(){
        console.log("Greetings from "+this.name);
        
    }
}
 myObject.greet();
console.log(myObject.name);



function Car(){

}
let car1 = new Car()
let car2 = new Car()
Car.prototype.color="red"

console.log(Car.prototype);
console.log(car1.color);
console.log(car2.color);






