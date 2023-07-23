const URL = 'https://jsonplaceholder.typicode.com/posts';
const postsContainer = document.getElementById('posts-container');

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
				
				const editButton = document.createElement('a');
				editButton.classList.add('button');
				editButton.classList.add('button--danger');
				editButton.classList.add('button--edit');
				editButton.textContent = "Edit";
				editButton.href = `./edit-post/edit-post.html?postId=${post.id}`;
				listItem.appendChild(editButton);

				const deleteButton = document.createElement('button');
				deleteButton.classList.add('button');
				deleteButton.classList.add('button--danger');
				deleteButton.textContent = "Delete";
				deleteButton.style.backgroundColor = 'magenta';
				deleteButton.style.color = 'white';
				deleteButton.style.textDecorationThickness='4px'
				function deletePost() {
					fetch('https://jsonplaceholder.typicode.com/posts/1', {
						method: 'DELETE',
					});
				};
				listItem.appendChild(deleteButton);
				deleteButton.addEventListener('click',deletePost);

				// https://domain.com/home-page/something-else?queryParam1=queryParam1Value&queryParam2=queryParam2Value

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
  postsContainer.innerHTML = '';
};

document.getElementById('fetch-button').addEventListener('click', fetchPosts);
document.getElementById('clear-button').addEventListener('click', clearPosts);