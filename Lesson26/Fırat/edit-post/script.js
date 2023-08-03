window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const postId = url.searchParams.get("postId");

  const inputTitle = document.getElementById("input-title");
  const inputBody = document.getElementById("input-body");
  const resultDiv = document.getElementById("result");

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((data) => {
      inputTitle.value = data.title;
      inputBody.value = data.body;
    })
    .catch((error) => console.error(error));

  document
    .getElementById("edit-post-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const newTitle = inputTitle.value;
      const newBody = inputBody.value;

      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({
          title: newTitle,
          body: newBody,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          resultDiv.innerHTML = "Post updated successfully!";
        })
        .catch((error) => {
          resultDiv.innerHTML = "An error occurred while updating the post.";
          console.error(error);
        });
    });
});

/* 
TODO: add logic and necessary element to the HTML file to create a form where a post can be edited.
When page is loaded, the default values should contain current title and body of the post.
It should be possible to send an API request (PUT) to update the post.
The result of the API call should be displayed on the same page under the form, if the API request was successful.
The page should containt a button to return back to the main page.

*/
