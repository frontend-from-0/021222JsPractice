// window.addEventListener('load', () => {
// 	const url = new URL(window.location.href);
// 	const postId = url.searchParams.get('postId');
// });


const URL = 'https://jsonplaceholder.typicode.com/posts';
// Get the chosen post ID from the URL query parameter
const postId = new URLSearchParams(window.location.search).get('postId');

const editPostForm = document.getElementById('edit-post-form');

const postsContainer = document.getElementById('posts-container');

// Function to fetch the data of the chosen post
function fetchPost(postId) {
  return fetch(`${URL}/${postId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error('An error occurred while fetching the post: ', error);
      return null;
    });
}

// Function to update the post
function updatePost(postId, updatedData) {
  return fetch(`${URL}/${postId}`, {
    method: 'PUT',
    body: JSON.stringify(updatedData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('An error occurred while updating the post: ', error);
      return null;
    });
}

// Function to pre-fill the form fields with the chosen post data
function preFillForm(post) {
  const editTitleInput = document.getElementById('edit-title');
  const editBodyInput = document.getElementById('edit-body');

  editTitleInput.value = post.title;
  editBodyInput.value = post.body;
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const postId = new URLSearchParams(window.location.search).get('postId');
  const editTitleInput = document.getElementById('edit-title');
  const editBodyInput = document.getElementById('edit-body');

  const updatedData = {
    title: editTitleInput.value,
    body: editBodyInput.value,
  };

  // Update the post using the PUT request
  updatePost(postId, updatedData)
    .then((updatedPost) => {
      if (updatedPost) {
        // Display the result on the page
        const successMessage = document.createElement('p');
        successMessage.classList.add('success-message');
        successMessage.textContent = 'Post updated successfully!';
        editPostForm.appendChild(successMessage);

		const listItem = document.createElement('li');
		listItem.classList.add('post');

		const heading = document.createElement('h2');
		heading.classList.add('post-title');
		heading.innerText = updatedPost.title;
		listItem.appendChild(heading);

		const paragraph = document.createElement('p');
		paragraph.classList.add('post-body');
		paragraph.innerText = updatedPost.body;
		listItem.appendChild(paragraph);

		postsContainer.appendChild(listItem);

      }
    });
}


// Fetch the chosen post data and pre-fill the form
fetchPost(postId)
  .then((post) => {
    if (post) {
      preFillForm(post);
    } else {
      const errorMessage = document.createElement('p');
      errorMessage.classList.add('error-message');
      errorMessage.textContent = 'Failed to fetch the post data.';
      editPostForm.appendChild(errorMessage);
    }
  });

// Event listener for form submission
editPostForm.addEventListener('submit', handleFormSubmit);
