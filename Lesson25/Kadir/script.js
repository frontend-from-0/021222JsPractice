/* 
Elements to use:
li (.post)
h2 (.post-title)
p (.post-body)
*/

const URL = 'https://jsonplaceholder.typicode.com/posts';
const postsContainer = document.getElementById('post-list');

function fetchPosts() {
	fetch(URL)
		.then((response) => response.json())
		.then((posts) =>
			posts.forEach((post) => {
				const listItem = document.createElement('li');
				listItem.classList.add('post');

				const heading = document.createElement('h2');
				heading.classList.add('post-title');
				heading.innerText = post.title;
				listItem.appendChild(heading);

				const paragraph = document.createElement('p');
				paragraph.classList.add('post-body');
				paragraph.innerText = post.body;
				listItem.appendChild(paragraph);

				postsContainer.appendChild(listItem);
			})
		)
    .catch((error) => {
			console.error('An error occured: ', error);
		});
};

function clearPosts() {
  postsContainer.innerText = '';
};

document.getElementById('fetch-button').addEventListener('click', fetchPosts);
document.getElementById('clear-button').addEventListener('click', clearPosts);