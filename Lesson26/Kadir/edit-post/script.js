	//  // Function to fetch JSON data based on postId
	//  async function fetchPostById(postId) {
    //     // Replace 'api/posts' with your actual API endpoint
    //     const response = await fetch (url+'?postId=${post.id}`);
    //     const postData = await response.json();
    //     return postData;
    //   }

    //   // Fetch the JSON data based on postId
    //   fetchPostById(postId)
    //     .try((postData) => {
    //       // Now you have access to the postData object, and you can edit it as needed.
    //       console.log('Original post data:', postData);
    //       // Perform the necessary editing operations...
    //       const postTitleElement = document.getElementById('edit-title');
    //       postTitleElement.textContent = `Title: ${postData.title}`;
    //       // For example, display the edited data in the post body element
    //       const postBodyElement = document.getElementById('edit-body');
    //       postBodyElement.textContent = `Body: ${postData.body}`;
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
//   });

// onst URL = 'https://jsonplaceholder.typicode.com/posts';
// const postsContainer = document.getElementById('posts-container');

// function fetchPosts() {
// 	fetch(URL)
// 		.then((response) => response.json())
// 		.then((posts) =>
// 			posts.forEach((post) => {
// 				const listItem = document.createElement('li');
// 				listItem.classList.add('post');

// 				const heading = document.createElement('h2');
// 				heading.classList.add('post-title');
// 				heading.innerText = post.title;
// 				listItem.appendChild(heading);

// 				const paragraph = document.createElement('p');
// 				paragraph.classList.add('post-body');
// 				paragraph.innerText = post.body;
// 				listItem.appendChild(paragraph);

// 				postsContainer.appendChild(listItem);
// 			})
// 		)
//     .catch((error) => {
// 			console.error('An error occured: ', error);
// 		});
// };
// window.addEventListener('load', () => {
// 	const url = new URL(window.location.href);
// 	const postId = url.searchParams.get('postId');
// });

// const form = document.getElementById("edit-post-form");
// form.addEventListener("submit", (event) => editPost(event, postId));

// function editPost(event, postId) {
// 	event.preventDefault();

// 	const titleEdit = document.getElementById('edit-title').target(post.title).textContent;  
// 	const bodyEdit = document.getElementById('edit-body').target(post.body).textContent;

// 	fetch('https://jsonplaceholder.typicode.com/posts/'+postId, {
// 	method: 'PUT',
// 	body: JSON.stringify({
// 		id: postId,
// 		title: titleEdit,
// 		body: bodyEdit,
// 		userId: 1,
// 	}),
// 	headers: {
// 		'Content-type': 'application/json; charset=UTF-8',
// 	},
// 	})
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// } 
/* 
TODO: add logic and necessary element to the HTML file to create a form where a post can be edited.
When page is loaded, the default values should contain current title and body of the post.
It should be possible to send an API request (PUT) to update the post.
The result of the API call should be displayed on the same page under the form, if the API request was successful.
The page should containt a button to return back to the main page.
*/

    // // Function to get the current post data (replace this with your API call to fetch the post data)
    // function getCurrentPostData() {
	// 	return {
	// 	  title: "Current Post Title",
	// 	  body: "Current body of the post."
	// 	};
	//   }
  
	//   // Function to update the post (replace this with your API call to update the post)
	//   function updatePost(newData) {
	// 	// Assuming the API returns a Promise, replace this with your actual API call
	// 	return new Promise((resolve, reject) => {
	// 	  // Simulate a delay to mimic API call
	// 	  setTimeout(() => {
	// 		// If the API call is successful, resolve with the updated data
	// 		// Otherwise, reject with an error message
	// 		const success = true; // Replace this with your actual success check
	// 		if (success) {
	// 		  resolve(newData);
	// 		} else {
	// 		  reject("Failed to update post.");
	// 		}
	// 	  }, 1000); // Simulate a 1-second delay
	// 	});
	//   }
  
	//   // Function to handle form submission
	//   function handleFormSubmit(event) {
	// 	event.preventDefault();
  
	// 	// Get the form data
	// 	const formData = new FormData(event.target);
	// 	const updatedPost = {
	// 	  title: formData.get("title"),
	// 	  body: formData.get("body")
	// 	};
  
	// 	// Call the updatePost function to send the API request
	// 	updatePost(updatedPost)
	// 	  .then(updatedData => {
	// 		// Display the result on the page
	// 		const resultElement = document.getElementById("result");
	// 		resultElement.innerHTML = "<h2>Post Updated Successfully</h2>" +
	// 								  "<p><strong>Title:</strong> " + updatedData.title + "</p>" +
	// 								  "<p><strong>Body:</strong> " + updatedData.body + "</p>";
	// 	  })
	// 	  .catch(error => {
	// 		// Display an error message on the page if the API request fails
	// 		const resultElement = document.getElementById("result");
	// 		resultElement.innerHTML = "<h2>Error Updating Post</h2>" +
	// 								  "<p>" + error + "</p>";
	// 	  });
	//   }
  
	//   // Event listener for form submission
	//   const editForm = document.getElementById("editForm");
	//   editForm.addEventListener("submit", handleFormSubmit);
  
	//   // Event listener for the "Back to Main Page" button
	//   const backBtn = document.getElementById("backBtn");
	//   backBtn.addEventListener("click", () => {
	// 	// Replace this with the logic to navigate back to the main page
	// 	// For example, you could use window.location.href to redirect to the main page.
	// 	alert("Navigating back to the main page.");
	//   });
  
	//   // On page load, populate the form with the current post data
	//   window.onload = () => {
	// 	const currentPostData = getCurrentPostData();
	// 	const titleInput = document.getElementById("title");
	// 	const bodyInput = document.getElementById("body");
  
	// 	titleInput.value = currentPostData.title;
	// 	bodyInput.value = currentPostData.body;
	//   };

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
