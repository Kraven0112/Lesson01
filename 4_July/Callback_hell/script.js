const display = document.querySelector('.getting');
const dataDisplay = document.querySelector('.data');
function makeHttpRequest(method,url,callback)
{
    const xhr = new XMLHttpRequest();
    xhr.responseType="json";

    xhr.addEventListener('load',()=>{
        if(callback)
        {
            callback(xhr.response);
            display.innerHTML = xhr.response.users[0].firstName;
        }
    })
    xhr.open(method,url);
    xhr.send();
}

makeHttpRequest('GET',`https://dummyjson.com/users`,(userData)=>{
    makeHttpRequest('GET',`https://dummyjson.com/posts/user/${userData.users[0].id}`,(postData)=>{
        makeHttpRequest('GET',`https://dummyjson.com/comments/post/${postData.posts[0].id}`,(comments)=>{
            console.log(comments.comments[0])
        });
    });
});