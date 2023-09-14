const URL = 'https://jsonplaceholder.typicode.com/posts';
const form = document.getElementById('new-post-form');

function createNewPost(event) {
  event.preventDefault();

const titleInput = document.getElementById('input-title');  
const bodyInput = document.getElementById('input-body');

    fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
          title: titleInput.value,
          body: bodyInput.value,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
};

form.addEventListener("submit", (event) => createNewPost(event));

