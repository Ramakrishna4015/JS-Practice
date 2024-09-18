
//1}
let num=20;
if(num===10){
    console.log(num);
    
}

//2}
let num1 = 20;
let num2 = 10;
if(num1===num2){
    console.log("true");
    
}
else
{
    console.log("false");
    
}
//3}
//let person = "coordinator"
let person = "Rk";
if(person ==="instrutor"){
    console.log("instructor");
  }
if(person==="coordinator"){
    console.log("coordinator");
    
}
if(person==="mentor"){
    console.log("mentor");
    
}
//checks all consditions before it satifies with given valuse 
//if given values doent match up then gives nothing

//4}
if(person ==="instrutor"){
    console.log("instructor");
  }
else if(person==="coordinator"){
    console.log("coordinator");
    
}
else if(person==="mentor"){
    console.log("mentor");
    
}
else{
    console.log("none");
    
}
//here checks the conditions if satisfied then gets out of the loop
//if not then prints the else statements
//if nothing is given as input then also prints else stamts

//5 switch
switch (person){
    case 'instructor':
    console.log("instructor");
    break;
    case 'coordinator':
    console.log("coordinator");
    break;
    case 'Rk':
    console.log("rk");
    break;
    case 'student':
    console.log("student");
    
//break will break the flow of code execution after it met the condition
}