window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const postId = url.searchParams.get("postId");
  const URLToBeEdited = "https://jsonplaceholder.typicode.com/posts";
  const inputContainer = document.getElementById("new-post-form");

  const titleInput = document.getElementById("input-title");
  const bodyInput = document.getElementById("input-body");
  const postsContainer = document.getElementById("posts-container");

  fetch(`${URLToBeEdited}/${postId}`)
    .then((res) => res.json())
    .then((data) => {
      titleInput.value = data.title;
      bodyInput.value = data.body;
    });

  const handleSubmit = (event) => {
    postsContainer.innerText = "";
    event.preventDefault();
    if (
      titleInput.value == "" ||
      bodyInput.value == ""
    ) {
      
      const listItem = document.createElement("li");
      listItem.classList.add("post");

      const notification = document.createElement("p");
      notification.classList.add("post-body");
      notification.innerText = "Title or/and Body is empty";
      listItem.appendChild(notification);

      postsContainer.appendChild(listItem);
    }else{
      postsContainer.innerText = "";

      fetch(`${URLToBeEdited}/${postId}`, {
        method: "PUT",
        body: JSON.stringify({
          id: postId,
          title: titleInput.value,
          body: bodyInput.value,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const listItem = document.createElement("li");
          listItem.classList.add("post");
  
          const notification = document.createElement("p");
          notification.classList.add("post-body");
          notification.innerText = "Data successfully updated!";
          listItem.appendChild(notification);
  
          const heading = document.createElement("h2");
          heading.classList.add("post-title");
          heading.innerText = data.title;
          listItem.appendChild(heading);
  
          const paragraph = document.createElement("p");
          paragraph.classList.add("post-body");
          paragraph.innerText = data.body;
          listItem.appendChild(paragraph);
  
          postsContainer.appendChild(listItem);
        });
    }

    
  };

  inputContainer.addEventListener("submit", handleSubmit);
});

/* 
TODO: add logic and necessary element to the HTML file to create a form where a post can be edited.
When page is loaded, the default values should contain current title and body of the post.
It should be possible to send an API request (PUT) to update the post.
The result of the API call should be displayed on the same page under the form, if the API request was successful.
+++The page should containt a button to return back to the main page.

*/
