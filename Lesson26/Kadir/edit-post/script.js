window.addEventListener('load', () => {
	const url = new URL(window.location.href);
	const postId = url.searchParams.get('postId');
});

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

function editPost(event) {
	event.preventDefault();

const titleEdit = document.getElementById('edit-title');  
const bodyEdit = document.getElementById('edit-body');

titleEdit.append(post.title);
bodyEdit.append(post.body);

fetch('https://jsonplaceholder.typicode.com/posts/'+'?postId=postId', {
  method: 'PUT',
  body: JSON.stringify({
    id: postId,
    title: titleEdit,
    body: bodyEdit,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  form.addEventListener("submit", (event) => editPost(event));
} 
/* 
TODO: add logic and necessary element to the HTML file to create a form where a post can be edited.
When page is loaded, the default values should contain current title and body of the post.
It should be possible to send an API request (PUT) to update the post.
The result of the API call should be displayed on the same page under the form, if the API request was successful.
The page should containt a button to return back to the main page.
*/