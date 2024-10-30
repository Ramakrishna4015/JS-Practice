let person1 = {
    name:'rk',
    age:30,
    adress :'hyderbad'
}

// json format
// {
//     'name':'rk',
//     'age':30,
//     'adress' :'hyderbad'
// }

let converted = JSON.stringify(person1);
console.log(converted);
let parse = JSON.parse(converted)
console.log(parse);

////////////////////AJAX////////
const httpPost = new XMLHttpRequest()
httpPost.open('GET','https://jsonplaceholder.typicode.com/posts')


///////////////////FETCH///////////
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    console.log(response);
    
    return response.json(); ///to get data this returns promise
    //so still it retuns promise so then is usd to sho the data
    
})
.then((data)=>{
    console.log(data);///acccess to the data
    
})
.catch(()=>{

})
const data1 = {
    name:'rk',
    age:30
}
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify(data1),
    headers: {
        'Content-type':'application/json'
    }
})
.then((res)=>{
    return res.json()
})
.then((data)=>{
        console.log(data);
        
})
