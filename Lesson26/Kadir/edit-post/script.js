
window.addEventListener('load', () => {
	const url = new URL(window.location.href);
	const postId = url.searchParams.get('postId');
});

	// Fetch the data for the given postId
	const postData = await fetchPostById(postId);
  
	// Display the fetched data in the post body
	const postBodyElement = document.getElementById('post-body'); // Assuming you have a post body element in your HTML
	postBodyElement.textContent = postData.body;
  });
  
  // Function to fetch a specific post by its ID
  async function fetchPostById(postId) {
	const response = await fetch(`../index.html?postId=${postId}`);
	const postData = await response.json();
	return postData;
  }
  
/* 
TODO: add logic and necessary element to the HTML file to create a form where a post can be edited.
When page is loaded, the default values should contain current title and body of the post.
It should be possible to send an API request (PUT) to update the post.
The result of the API call should be displayed on the same page under the form, if the API request was successful.
The page should containt a button to return back to the main page.

*/