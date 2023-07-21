
window.addEventListener('load', () => {
	const url = new URL(window.location.href);
	const postId = url.searchParams.get('postId');
});


/* 
TODO: add logic and necessary element to the HTML file to create a form where a post can be edited.
When page is loaded, the default values should contain current title and body of the post.
It should be possible to send an API request (PUT) to update the post.
The result of the API call should be displayed on the same page under the form, if the API request was successful.
The page should containt a button to return back to the main page.

*/