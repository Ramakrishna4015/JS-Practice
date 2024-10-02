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
        
    },
    // lastname :"kodimoju"
}
Object.prototype.lastname = "kodimoju"
console.log(myObject);

 myObject.greet();
console.log(myObject.name);
console.log(myObject.lastname);




// function Car(){

// }
// let car1 = new Car()
// let car2 = new Car()
// Car.prototype.color="red"

// console.log(Car.prototype);
// console.log(car1.color);
// console.log(car2.color);



function Person(name,role){
    this.name= name
    this.role = role ///first checks inside 
}
Person.prototype.role = "student"//second checks prototype
Object.prototype.role = "student"//then check inside Object
let Ram = new Person("Ram","student")
console.log(Ram);
console.log(Ram.name);
console.log(Ram.role);

///////prototpes with objects

let obj1 = {
    name1 : "name1",add1 :"add1"
}
let obj2 ={
    name2:"name2",add2:"add2"
}
// Object.setPrototypeOf(obj1,obj2)
console.log(obj1.add2);
console.log(obj2.add2);







