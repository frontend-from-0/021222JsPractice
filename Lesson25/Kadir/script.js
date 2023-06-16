/* 
Elements to use:
li (.post)
h2 (.post-title)
p (.post-body)
*/

const URL = 'https://jsonplaceholder.typicode.com/posts';
function fetchPosts() {
}

function clearPosts() {
};

document.getElementById('fetch-button').addEventListener('click', fetchPosts);
document.getElementById('clear-button').addEventListener('click', clearPosts);
