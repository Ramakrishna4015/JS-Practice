// const x= 410;

// const y = 520;
// console.log(x);
var x = 420;
function test(){
   
    console.log(x); 
    
    function test2(){
        var b= 20;
        console.log(x);
        console.log(b);
    }
    
    function test3(){
        console.log(x);
        //console.log(b);
        
    }
    test2();
    test3();
    
}
test();
console.log(x); 
/////////////////////
function practice(){
    var a = 21;
    var b= 22;
    
    function inner(){
        console.log(a);

        
    }
    
    return inner;
   
}
var result = practice();
result();

