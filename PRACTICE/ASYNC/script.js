// console.log('start');
// function print(){
//     console.log("second");
    
// }
// setTimeout(()=>{
//     console.log("inside");
    
// },5000)
// setTimeout(print,6000)
// console.log('end');
function one(){
    console.log('1');
    
}
function two(){
    console.log('2');
    
}
function three(){
    console.log('3');
    
}
setTimeout(three,3)
setTimeout(one,1)
setTimeout(two,2)
console.log('start');


function test(){
    console.log("testing");
    setTimeout(()=>{
        console.log('4');
        
    },4)
}
test()
console.log('end');
//first GE =>start
//second EC for funtio=> test=>poppped out
//GE for end will execute then =>end =>popped out
// third WEB API
///////////////


////////////////PROMISES////////////////
//ex: facebook login
//1)clicking login after entering deauls
//2)chekcing tge user validityy
//3)getting user details
/*
function checkValidUser(){
    let username;
    if(username === 'rk'){
        console.log('valid user');
        setTimeout(getDetails,2000)
       }
       else{
        console.log('invalid user');
       }
}
function getDetails(){
        console.log("details are");
        setTimeout(getMsgs,3000)
        
}
function getMsgs(){
    console.log('mags are ......');
    
}

//for cheching the valid user then we habe get details 
setTimeout(checkValidUser,1000)

//////////////////another way///
setTimeout((username)=>{
    if(username === 'rk'){
        console.log('valid user');
        setTimeout(()=>{
            console.log("details are");
            setTimeout(()=>{
                console.log('mags are ......');
            },3000)
        },2000)
       }
       else{
        console.log('invalid user');
       }
},1000,'rk')

*/

//////////////////////promise/////

//creating promise
 let fetschUser = (username)=>{
        return new Promise((resolve,reject)=>{
                if(username === 'rk'){
                    console.log('success');
                    
                    resolve('123')
                }
                else{
                    reject('user is not found')
                }
        })
 }
 //handling promise
 fetschUser('rk')
 .then((id)=>{
        console.log(id);
        
 })
 .catch()