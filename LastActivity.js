const posts = [];
function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({ title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()});
            resolve(posts)
        }, 1000)
    }) 
}
function getPosts(){
    let output=''
    for(let i=0; i<posts.length; i++){
    output += `<li>${posts[i].title} - last updated  ${(new Date().getTime() - posts[i].createdAt)/1000}- seconds ago</li>`
    }    
    document.body.innerHTML = output;

}

 
function updatelastactivity() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            updatelastactivity = new Date().getTime();
            resolve(updatelastactivity);
        }, 1000)
    }) 
}


function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 4000)
    })
}


    Promise.all([createPost({title: 'Post two', body: 'This is post two', createdAt: new Date().getTime}),updatelastactivity()]).then(([createPostresolve , updatelastactivityresolve]) => {console.log(createPostresolve , updatelastactivityresolve)
        getPosts()
        deletePost().then(() =>{
            getPosts();
        })

        
        }).catch((err) => console.log(err))