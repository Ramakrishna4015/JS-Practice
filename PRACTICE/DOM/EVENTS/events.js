let Addbutton = document.getElementById('add')
let Subsbutton = document.getElementById('substract')
console.log(Addbutton);
console.log(Subsbutton);

Addbutton.addEventListener('click',()=>{
    console.log("Add button clicked");
    
})
function handler(){
    console.log("substractoin button clicked");
    
}
Subsbutton.addEventListener('click',handler)

Addbutton.addEventListener('mousemove',()=>{
    // arrow function &
    // callback function &
    //anonymous function
    console.log("mouse moved");
    //mousemove =>
    
})
let hovertime = 0;
let counttimes = document.getElementById('counttimes')
Subsbutton.addEventListener('mouseenter',()=>{
    if(hovertime<10){
    hovertime++;
    console.log("hovering on subs button"+hovertime);
    counttimes.innerText=hovertime;
    }
    
})

Subsbutton.addEventListener('mouseleave',()=>{
    console.log("mouse left");
    // username.innerText= 
    // placeholder.innerText = "hey";
    
})
// let placeholder = document.getElementById('placeholder')
function changePlaceholder(){
    document.getElementById('username').placeholder ="hello enter your username"
}
function resestPlaceholder(){
    document.getElementById('username').placeholder = ""
}
function AddToCart(){
    console.log("item added to cart");
    
}
function hovering(){
    console.log("item hovered");
    
} 

////////////////////////////
function nameChange(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    
    console.log("name changed");
    
}