// console.log(document);
// console.log(document.URL);
// console.log(document.domain);
// document.title="DOM MANIPULATION"

// console.log(document.title);
// console.log(document.all); ///gives all el in array form
// console.log(document.all[1]);

// console.log(document.links);//gives links available in doc
// console.log(document.forms); //retrreives all forms
// console.log(document.images);//collection of img 
// document.write("hello am rk")//gets appended after script tag

///selectors 
// document.getElementById('main-header')
// console.log(document.getElementById('main-header'));
// document.getElementsByClassName('header-container');
// console.log(document.getElementsByClassName('header-container')
// );
// document.getElementsByTagName('div')
// console.log(document.getElementsByTagName('div'));

let input = document.querySelector('input[type="password"]')
console.log(input);

let div =document.querySelector('div')
console.log(div);
div.innerHTML = "<p>this is a klnjbhvgbchanged content</P>"
let newpara = document.querySelector( 'p.header-container');
console.log(newpara);
newpara.innerText = "new para"

let ListItems = document.getElementsByClassName('product');

for(let i=0;i<ListItems.length;i++){
    ListItems[i].innerText ="Product "+(i+1);
    
}
console.log(ListItems);
// ListItems[0].innerText = "rk"
// let products =['shirt','mobile','earphone','tv']
// for(i=0;i<products.length;i++){
//     ListItems[i].innerText = products[i] +(i+1)
// }
let Lastdiv = document.querySelector('div.cards');
console.log(Lastdiv);
//create a text node <= adding contnet
// let add = document.createTextNode("newwwwww");
// Lastdiv.appendChild(add) 

//adding element like p/div tag
let ptag = document.createElement('p')
ptag.innerText = "newww p tag ";
ptag.className = "myclass"
Lastdiv.appendChild(ptag)





