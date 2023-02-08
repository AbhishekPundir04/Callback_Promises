const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];


function getPosts() {

    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li> ${post.title}</li>`
        });
        document.body.innerHTML = output;

    },1000)

}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback()
    },4000)
}

function create4Post(post4, callback) {
    setTimeout(() => {
        posts.push(post4);
        callback(post4,getPosts)
    },4000)
}


createPost({title: 'Post Three', body: 'This is post Three'}, getPosts)
create4Post({title: 'Post Four', body: 'This is post Four'}, getPosts)
