const posts = [
    {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];


let intervalId=0;    

function getPosts(){
    clearInterval(intervalId)
    intervalId = setInterval(()=>{
        let output=''
        for(let i=0; i<posts.length; i++){
        output += `<li>${posts[i].title} - last updated  ${(new Date().getTime() - posts[i].createdAt)/1000}- seconds ago</li>`
        }    
        document.body.innerHTML = output;
    
    },1000)
  
}
getPosts()

function createPost (post){
    return new Promise((resolve, reject) => {
        setTimeout (()=> {
       
            posts.push({ ...post, createdAt: new Date().getTime()});
            const error = false;

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

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length>0){
                const lastelement =posts.pop()
                resolve(lastelement);
            } else {
                reject('Array is empty now')
            }
        }, 1000)
    });
}

createPost({ title: 'Post Three', body: 'This is post three'})
.then(() => {
    getPosts()
    deletePost().then(() => {
        getPosts();
        deletePost().then(() => {
            getPosts();
            deletePost().then(() => {
                getPosts()
                deletePost().then(() => {})
                .catch((err) => {
                    console.log('Inside catch block', err);
                })
            })
        })
    })
})
.catch(err => console.log('Error'));





    function deletePost(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(posts.length>0){
                    const lastelement =posts.pop()
                    resolve(lastelement);
                } else {
                    reject(console.log("Array is empty"))
                }
            }, 1000)
        });
    }
    
    createPost({ title: 'Post Three', body: 'This is post three'})
    .then(() => {
        getPosts()
        deletePost().then(() => {
            getPosts();
            deletePost().then(() => {
                getPosts();
                deletePost().then(() => {
                    getPosts()
                    deletePost().then(() => {})
                    .catch((err) => {
                        console.log('Inside catch block', err);
                    })
                }).catch(() => console.log("Empty"))
            }).catch(() => console.log("Empty"))
        }) .catch(() => console.log("Empty"))
    })
    .catch(err => console.log(err));