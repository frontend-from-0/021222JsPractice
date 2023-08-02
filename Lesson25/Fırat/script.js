/* 
Elements to use:
li (.post)
h2 (.post-title)
p (.post-body)
*/

const URL = "https://jsonplaceholder.typicode.com/posts";
const postList = document.getElementById("post-list");
function fetchPosts() {
  fetch(URL)
    .then((response) => response.json())
    .then((posts) =>
      posts.forEach((post) => {
        const listItem = document.createElement("li");
        listItem.classList.add("post");

        const postTitle = document.createElement("h2");
        postTitle.classList.add("post-title");
        postTitle.innerText = post.title;
        listItem.appendChild(postTitle);

        const postBody = document.createElement("p");
        postBody.classList.add("post-body");
        postBody.innerText = post.body;
        listItem.appendChild(postBody);

        postList.appendChild(listItem);
      })
    )
    .catch((error) => {
      console.error("hata:", error);
    });
}

function clearPosts() {
  postList.innerHTML = " ";
}

document.getElementById("fetch-button").addEventListener("click", fetchPosts);
document.getElementById("clear-button").addEventListener("click", clearPosts);
