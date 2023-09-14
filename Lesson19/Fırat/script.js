/*
  Finding elements:
	const myDiv = document.getElementById('myDiv');
  const highlightedElements = document.getElementsByClassName('highlight');
  const paragraphs = document.getElementsByTagName('p');
  // En kötü seçenek
	const firstParagraph = document.querySelector('#myDiv p:first-of-type');


  Modifiying elements:
  const myParagraph = document.getElementById('paragraph1');
  myParagraph.textContent = 'This is some new text!';
	myParagraph.style.color = '#000';
  myParagraph.style.fontWeight = '600';
  myParagraph.classList.add('myOtherClass');
  myImage.setAttribute('alt', 'A beautiful image');
	myImage.setAttribute('width', '500');

*/
// 1. Change the text color of all paragraphs on the page to #272932.

// var paragraphs = document.querySelectorAll("p");
// console.log("Excercise 1", paragraphs);
// for (var i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].style.color = "red";
// }

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  paragraph.style.color = "violet";
});

// 2. Change the background color of the entire page to #eff1f3.

// const mainElement = document.getElementById("main");
// console.log("Excercise 2", mainElement);
// mainElement.style.backgroundColor = "grey";

document.body.style.backgroundColor = "#eff1f3";

// 3. Add a new paragraph to the bottom of the page with this text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum esse, recusandae sint error possimus hic, voluptates vel eveniet est, deleniti reprehenderit fugit minus? Officiis iusto, incidunt molestiae neque quas omnis."
const newParagraph = document.createElement("p");
newParagraph.innerHTML =
  'Lorem ipsum dolor <a href="https://dsds.dsds">sit amet consectetur </a>adipisicing elit. Illum esse, recusandae sint error possimus hic, voluptates vel eveniet est, deleniti reprehenderit fugit minus? Officiis iusto, incidunt molestiae neque quas omnis.';
document.body.appendChild(newParagraph);

const firstParagraph = document.getElementById("first-paragraph");
// If it was a list, you could use the code below to insert the new element
// firstParagraph.insertBefore(newParagraph, positionWhereToInsert);

// 4. Remove the second image from the page.
const images = document.body.querySelectorAll("img");
console.log(images);
images[1].remove();

// 5. Add a border to all images on the page (2px solid #272932).

const myImages = document.body.querySelectorAll("img");

myImages.forEach((image) => {
  image.style.border = "2px solid #272932";
});

// 6. Change the text of the first heading on the page to "Welcome to my Website".

const heads = document.body.querySelectorAll("h1");

heads[0].textContent = "Welcome to my Website";

// 7. Replace the first image on the page with a new image ("https://picsum.photos/400/200").

const allImages = document.body.querySelectorAll("img");

const newImage = document.createElement("img");
newImage.src = "https://picsum.photos/400/200";

allImages[0].parentNode.replaceChild(newImage, allImages[0]);

// 8. Remove the first list item from the unordered list.

const list = document.body.querySelectorAll("li");

list[0].remove();

// 9. Append a new list item to the end of the ordered list with the text "Last Item".

const myList = document.body.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "Last Item";

myList.appendChild(newItem);
// 10. Add a button (in html) with "Hide images" text. When a button is clicked, change the text of the button to "Show images" and hide all the images on the web page (set display to none).

const button = document.createElement("button");
button.textContent = "Hide Images";
document.body.appendChild(button);

const newImages = document.body.querySelectorAll("img");
button.addEventListener("click", () => {
  if (button.textContent === "Hide Images") {
    newImages.forEach((image) => {
      image.style.display = "none";
    });
    button.textContent = "Show Images";
  } else {
    newImages.forEach((image) => {
      image.style.display = "initial";
    });
    button.textContent = "Hide Images";
  }
});
