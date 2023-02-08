const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];



// let intervalId=0;

// function getPosts(){
//     clearInterval(intervalId)
//     intervalId = setInterval(()=>{
//         let output=''
//         for(let i=0; i<posts.length; i++){
//         output += `<li>${posts[i].title}</li>`
//         }    
//         document.body.innerHTML = output;
    
//     },3000)
  
// }


function getPosts(){
    let output=''
    for(let i=0; i<posts.length; i++){
    output += `<li>${posts[i].body} - last updated  ${(new Date().getTime() - posts[i].createdAt)/1000}- seconds ago</li>`
    }    
    document.body.innerHTML = output;

}


function createPost (post){
    return new Promise((resolve, reject) => {
        setTimeout (()=> {
       
            posts.push(post);
            const error = true;

            if(!error)
            {
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
           
        },2000)
    });
   

    
}

createPost({title:'Post Three', body: 'This is  post three'}, getPosts)
 .then(getPosts)







//  PromisALL


// Promise.All
// const promise1 = Promise.resolve('HelloWorld')
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
// setTimeout(resolve, 2000, 'Goodbye'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json
// );

// Promise.all([promise1, promise2, promise3], promise4).then(values => console.log(values));
 