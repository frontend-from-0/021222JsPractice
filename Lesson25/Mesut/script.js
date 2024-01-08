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
    .then((res) => res.json())
    .then((data) => {
      data.map((dataItem) => {
        const listItem = document.createElement("li");
        listItem.classList.add("post");
        postList.appendChild(listItem);

        const postTitle = document.createElement("h2");
        postTitle.classList.add("post-title");
        postTitle.innerText = dataItem.title;
        listItem.appendChild(postTitle);

        const postBody = document.createElement("p");
        postBody.classList.add("post-body");
        postBody.innerText = dataItem.body;
        listItem.appendChild(postBody);
      });
    })
    .catch((error) => console.log(error));
}

function clearPosts() {
  postList.innerText = "";
}

document.getElementById("fetch-button").addEventListener("click", fetchPosts);
document.getElementById("clear-button").addEventListener("click", clearPosts);
