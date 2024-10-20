let title = document.getElementById('page-title')
console.log(title);

/////////getElementsByClassName => gives HTML collection
let famContacts = document.getElementsByClassName('family')
console.log(famContacts);
console.log(famContacts[0]);
console.log(famContacts.length);
// console.log(...famContacts);
//converting HTML collection into Array 
let famContactsArray = [...famContacts];
famContactsArray.forEach(element=> console.log(element));

//////getElementsByTagName =>gives HTML collections
let allContacts = document.getElementsByTagName('p')
console.log(allContacts);
console.log(allContacts[2]);
console.log(...allContacts);


//querySelector ==>gives first elemnet which matches condition
let firstWorkConact = document.querySelector('.work')
console.log(firstWorkConact);

//selecting third button from div using query selectors
let thirdBtn = document.querySelector('div button:nth-child(3)')
console.log(thirdBtn);

///querySelectorAll ==>selects all elements
let allBtns = document.querySelectorAll('button')
console.log(allBtns);
/////
let firstPara = document.getElementById('topic')
// console.log(firstPara);
console.log(firstPara.innerHTML);
//changing the content
firstPara.innerHTML = "<b>updated<b> element"
// console.log(firstPara);
console.log(firstPara.innerHTML);

//////////////////getAttribute
const btn = document.getElementById('first-button')
console.log(btn.getAttribute('type'));
////////////////setAttribute
btn.setAttribute('type','submit')
console.log(btn.getAttribute('type'));
/////styling in js
const header = document.getElementById('page-title')
console.log(header.style.color = 'red');
console.log(header.style.color = '');//removing the above property
//adding class name
console.log(header.className= 'head');












// let arrContacts = (...famContacts);


