// function CalvulateAge(yearofbirth){
//     console.log(this);pointing window object
   
//     function test1(){
//         console.log("test1");
        
//     }test1()pointing window object
//     return 2024-yearofbirth
// } 
// CalvulateAge(1990);
// window.CalvulateAge(1990);
// var Age = {
//     a :10,
//     CalculateAge:function(yearofbirth){
//         console.log(this); //pointing obj
//         function test(){
//             console.log(this);///pointing window object
//             console.log("calling test");
            
//         }test()
//         return 2024-yearofbirth
        
//     }
// }
// Age.CalculateAge(2020)//called by obj

// var Person = {
//    name:"rk",
//     yob:1999,
//     CalculateAge:function(yearofbirth){
//         console.log(this); //pointing obj Person
//          //console.log(2024-yob);//yob is not defined at Object.CalculateAge (Arrowfunctions.js:32:26) at Arrowfunctions.js:43:5
//         console.log(2024-this.yob);
        
//         function YearsleftforRtd(){
//             console.log(this);///pointing window object
//             console.log(60-(2024-this.yob));
            
//         }YearsleftforRtd()
        
        
//     }
// }
// Person.CalculateAge(2020)
// var Person = {
//     name:"rk",
//      yob:1999,
//      CalculateAge:function(yearofbirth){
//          console.log(this); //pointing obj Person
//           //console.log(2024-yob);//yob is not defined at Object.CalculateAge (Arrowfunctions.js:32:26) at Arrowfunctions.js:43:5
//          console.log(2024-this.yob);
//          let myThis = this
//          function YearsleftforRtd(){
//              console.log(myThis);///pointing window object
//              console.log(60-(2024-myThis.yob));
             
//          }YearsleftforRtd()
         
         
//      }
//  }
//  Person.CalculateAge(2020)


 ////USING ARROW FUNCTIONS///
//  var Person = {
//     name:"rk",
//      yob:1999,
//      CalculateAge:function(yearofbirth){
//          console.log(this); //pointing obj Person
//           //console.log(2024-yob);//yob is not defined at Object.CalculateAge (Arrowfunctions.js:32:26) at Arrowfunctions.js:43:5
//          console.log(2024-this.yob);
        //  let myThis = this
        //  function YearsleftforRtd(){
        //      console.log(myThis);///pointing window object
        //      console.log(60-(2024-myThis.yob));
             
        //  }YearsleftforRtd()
//         let YearsleftforRtd = ()=>{
//             console.log(this);
//             console.log(60-(2024-this.yob));
            
//         }
//          YearsleftforRtd()
         
//      }
//  }
//  Person.CalculateAge(2020)
var Per = {
    a:"rk",
     b:1999,
     c:this,
     d:function(){
        console.log(this);//inside the funtion
     },
     test3:()=>{
        console.log(this);
        console.log(this.a); 
        console.log(this.b);
       
     }
    }
    Per.test3();
    console.log(Per.c);
    console.log(Per.d());
    
