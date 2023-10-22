
window.addEventListener('load', () => {
	const url = new URL(window.location.href);
	const postId = url.searchParams.get('postId');


	const heading = document.getElementById('input-title');
	const paragraph = document.getElementById('input-body');
	const editPost = document.getElementById('edit-post');

	fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then((response) => response.json())
		.then((data) => {
			heading.value = data.title;
			paragraph.value = data.body;
		});

	editPost.addEventListener('click', (e) => {
		e.preventDefault();

		const newHeading = heading.value;
		const newParagraph = paragraph.value

		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
			method: 'PUT',
			body: JSON.stringify({
				id: postId,
				title: newHeading,
				body: newParagraph,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((newPost) => {
				const editedLiItem = document.getElementById('edited-li-item');

				const editedHeading = document.createElement('h2');
				editedHeading.classList.add('post-title');
				editedHeading.innerText = newHeading;
				editedLiItem.appendChild(editedHeading);

				const editedParagraph = document.createElement('p');
				editedParagraph.classList.add('post-body');
				editedParagraph.innerText = newParagraph;
				editedLiItem.appendChild(editedParagraph);
			})
			
	});
});

/* 
TODO: add logic and necessary element to the HTML file to create a form where a post can be edited.
When page is loaded, the default values should contain current title and body of the post.
It should be possible to send an API request (PUT) to update the post.
The result of the API call should be displayed on the same page under the form, if the API request was successful.
The page should containt a button to return back to the main page.

*/